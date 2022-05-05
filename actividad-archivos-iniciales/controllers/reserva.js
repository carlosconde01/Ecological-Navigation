const Reserva = require('../models/reserva')
const Bicicleta = require('../models/bicicleta')


exports.reserva_list = function (req, res) {
    if (req.isAuthenticated()) {
        Reserva.find({ usuario: req.user._id }, function (err, reservaciones) {
            res.render('listaReservas', { reservaciones: reservaciones })
        })
    } else {
        res.render('notlogged')
    }
}

exports.reserva_get = function (req, res) {
    if (req.isAuthenticated()) {
        res.render('crearReservacion')
    } else {
        res.render('notlogged')
    }

}

exports.reserva_post = function (req, res) {
    Bicicleta.findOne({ code: req.body.code }).then(function (bici) {
        Reserva.find({ bicicleta: bici._id }).then(function (reservas) {
            if (validateDates(req, reservas) == true) {
                let reserva = Reserva.createInstance(req.body.desde, req.body.hasta, bici._id, req.user._id)
                Reserva.add(reserva)
                res.redirect('/reserva')
            } else {
                res.render('noReserva', { codigo: req.params.id })
            }
        })
    })
}

function validateDates(req, reservas) {
    if (reservas.length > 0) {
        let flag = false
        reservas.forEach(reservacion => {
            //reservas de la bd
            let start = reservacion.desde
            let end = reservacion.hasta
            //reserva que quiere hacer el usuario
            let comparaStart = stringToDate(req.body.desde)
            let comparaEnd = stringToDate(req.body.hasta)

            console.log('BD: ' + start + ' ' + end)

            if ((start <= comparaEnd) && (comparaStart <= end)) {
                //Sí se superpone
                console.log('sí se superpone')
                flag = true
            }

            // if (((start <= comparaStart) && (end >= comparaStart)) || ((start <= comparaEnd) && (end >= comparaEnd))) {
            //     flag = true
            //     return false
            // }
        })

        if (flag) {
            console.log('Se superpone')
            return false
        } else {
            console.log('No se superpone')
            return true
        }


    } else {
        console.log('Es la primera reserva')
        return true
    }
}

function stringToDate(dateString) {
    let year = +dateString.substring(0, 4)
    let month = +dateString.substring(5, 7)
    let day = +dateString.substring(8, 10)
    let date = new Date(year, month - 1, day)
    return date
}