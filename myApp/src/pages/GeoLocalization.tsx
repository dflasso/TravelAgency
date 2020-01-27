import React, { useState, Fragment } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
    IonPage, IonHeader, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonTitle,
    IonContent, IonCardContent
} from '@ionic/react';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';
import MapGL from 'react-map-gl';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    }),
);


const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGZsYXNzbyIsImEiOiJjazV3Z2l3NzQxdXN3M21ubmRsZ3Rlc3kxIn0.nvvOmfaME_uhesO8OJpwoA'; // Set your mapbox token here

const GeoLocalization = () => {
    const classes = useStyles();


    const [viewport, setViewport] = useState({
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14,
        bearing: 0,
        pitch: 0
    });

    const [displayMap, setDisplayMap] = useState(false);



    
const handleClick = () => {

    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2']
    }).queue([
        {
            title: 'Tipo de localizacion',
            input: 'select',
            inputOptions: {
                GPS: 'GPS',
                Bitcon: 'Bitcon',
                QR: 'QR'
            }
        },
        {
            title: 'Forma de Localizacion',
            input: 'select',
            inputOptions: {
                Manual: 'Manual',
                Virtual: 'Virtual',
                Automatica: 'Automatica'
            }
        }
    ]).then((result) => {
        if (result.value[1] === 'Manual') {
            Swal.mixin({
                input: 'text',
                confirmButtonText: 'Next &rarr;',
                showCancelButton: true,
                progressSteps: ['1', '2', '3']
            }).queue([
                {
                    title: 'latitud',
                    input: 'range',
                    inputAttributes: {
                        min: '-100',
                        max: '100',
                        step: '1'
                    },
                    inputValue: '0',
                },
                {
                    title: 'longitud',
                    input: 'range',
                    inputAttributes: {
                        min: '-100',
                        max: '100',
                        step: '1'
                    },
                    inputValue: '0',
                },
                {
                    title: 'zoom',
                    input: 'range',
                    inputAttributes: {
                        min: '0',
                        max: '100',
                        step: '1'
                    },
                    inputValue: '14',
                }
            ]).then((resultManualData) => {
                if (resultManualData.value) {
                    setViewport({...viewport, latitude : Number(resultManualData.value[0]) });
                    setViewport({...viewport, longitude : Number(resultManualData.value[1]) });
                    setViewport({...viewport, zoom : Number(resultManualData.value[2]) });
                    setDisplayMap(true);
                }
            })


        } else if (result.value[1] === 'Virtual') {
            console.log('Virtual');
            Swal.fire(
                'Good job!',
                'Virtual',
                'success'
            )

        } else if (result.value[1] === 'Automatica') {
            console.log('Automatica');
            Swal.fire(
                'Good job!',
                'Automatica',
                'success'
            )
        }
    })
}

    return (
        <Fragment>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Inicio</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonCard className="welcome-card">
                        <img src="/assets/shapes.svg" alt="" />
                        <IonCardHeader>
                            <IonCardSubtitle>Proyecto Ing. Software I</IonCardSubtitle>
                            <IonCardTitle>Grupo 7</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <p>
                                Seleccione el usuario y dispositivo
                            </p>
                        </IonCardContent>
                    </IonCard>
                    <div className={classes.root}>
                        <Grid container spacing={3}>


                            <Grid item xs={12} >
                                <button type="button" className="btn btn-outline-success btn-block"
                                    onClick={handleClick}
                                >Localizacion</button>
                            </Grid>

                            <Grid item xs={10}>
                                {displayMap ?
                                 <MapGL
                                   {...viewport}
                                    width="100vw"
                                    height="100vh"
                                    mapStyle="mapbox://styles/mapbox/dark-v9"
                                    onViewportChange={setViewport}
                                    mapboxApiAccessToken={MAPBOX_TOKEN}
                                /> : null
                                }
                            </Grid>
                        </Grid>
                    </div>
                </IonContent>
            </IonPage>
        </Fragment >
    );
}

export default GeoLocalization;