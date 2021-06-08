import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    (function () {
        var actualizarHora = function () {
            var fecha = new Date(),
                horas = fecha.getHours(),
                ampm,
                minutos = fecha.getMinutes(),
                segundos = fecha.getSeconds(),
                diaSemana = fecha.getDay(),
                dia = fecha.getDate(),
                mes = fecha.getMonth(),
                year = fecha.getFullYear();


            var semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sesta', 'Sábado'];
            var pDiaSemana = semana[diaSemana];
            var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

            if (horas >= 12) {
                horas = horas - 12;
                ampm = 'PM';
            } else {
                ampm = 'AM';
            }

            if (horas === 0) {
                horas = 12;
            }

            // if (horas < 10 ){
            //     horas = "0" + horas;
            // }

            if (dia < 10) {
                dia = "0" + dia;
            }

            var pHour = horas;
            var pAMPM = ampm;

            if (minutos < 10) { minutos = "0" + minutos; }
            if (segundos < 10) { segundos = "0" + segundos; }


            var fullDate = pDiaSemana + ", " + dia + " de " + meses[mes] + " de " + year,
                fullHour = horas + ":" + minutos + ":" + segundos + " " + pAMPM

            var pDate = document.getElementById('date');
            pHour = document.getElementById('hour');

        if (pDate === null){
        }   else { 
            pDate.textContent = fullDate;
            pHour.textContent = fullHour;
        }
                

        };

        actualizarHora();
        setInterval(actualizarHora, 1000);
    }())

    return (
        <BottomWrapper>
            <InfoBottomWrapper>
                <p id="date"></p>
                <p id="hour"></p>
            </InfoBottomWrapper>
        </BottomWrapper>
    )
}

export default Footer

const BottomWrapper = styled.footer`
    width: 100%;
    background: rgb(39, 38, 38, .8);
    color: white;
    padding: .3rem;
`

const InfoBottomWrapper = styled.div`
	display: flex;
	justify-items: left;
	justify-content: space-between;
	padding: 0 .3rem;
`