import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, { useState } from 'react';
import './Tab1.css';
import { useHistory } from "react-router-dom";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const Tab1: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const [operadores, setOperadores] = useState<
    {
      objeto: string;
      Usuario: string;
    }>(
      {
        objeto: "",
        Usuario: ""
      }
    );

  const handleChange = (name: keyof typeof operadores) => (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    setOperadores({
      ...operadores,
      [name]: event.target.value,
    });

  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    console.log("entro");
    history.push("/GeoLocalization");
  }

  return (
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
        <form className={classes.root} onSubmit={handleSubmit}>
          <Grid container spacing={3} justify="center" direction="column" alignItems="center">
            <Grid item xs={12}>
              <FormControl variant="filled" className={classes.formControl} >
                <InputLabel id="demo-simple-select-label">Objeto</InputLabel>
                <Select
                  required
                  value={operadores.objeto}
                  onChange={handleChange("objeto")}
                >
                  <MenuItem value={"Carro"}>Carro</MenuItem>
                  <MenuItem value={"Celular"}>Celular</MenuItem>
                </Select>
                <FormHelperText>Campo necesario</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="filled" className={classes.formControl} >
                <InputLabel id="demo-simple-select-label">Usuario</InputLabel>
                <Select
                  required
                  value={operadores.Usuario}
                  onChange={handleChange("Usuario")}
                >
                  <MenuItem value={"Empleado"}>Empleado</MenuItem>
                  <MenuItem value={"Celular"}>Invitado</MenuItem>
                </Select>
                <FormHelperText>Campo necesario</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} >
              <button type="submit" className="btn btn-outline-success btn-block">continuar</button>
            </Grid>
          </Grid>

        </form>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
