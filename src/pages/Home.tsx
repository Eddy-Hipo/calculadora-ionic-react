import { IonText, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useState, useEffect } from 'react';

import './Home.css';

const Home: React.FC = () => {

  const [ text, setText ] = useState(0);
  const [ num1, setNum1 ] = useState(0);
  const [ num2, setNum2 ] = useState(0);
  const [ opcion, setOpcion ] = useState(0);



  const suma = () => {
    setNum2(num1);
    setOpcion(1);
    setText(0);
  }

  const resta = () => {
    setNum2(num1);
    setOpcion(2);
    setText(0);
  }

  const multi = () => {
    setNum2(num1);
    setOpcion(3);
    setText(0);
  }

  const div = () => {
    setNum2(num1);
    setOpcion(4);
    setText(0);
  }

  const borrar = () => {
    setNum2(0);
    setOpcion(0);
    setText(0);
    setNum1(0);
  }

  const igual = () => {
    switch(opcion){
      case 1:
        setText(num1 + num2);
        break;
      case 2:
        setText(num2 - num1);
        break;
      case 3:
        setText(num1 * num2);
        break;
      case 4:
        setText(num2 / num1);
        break;
      default:
        setText(0);
        break;
    }
    setNum1(0);
    setNum2(0);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculadora Hipo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonGrid>
          <IonRow>
            <IonCol ><IonText>{text}</IonText></IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol><IonButton onClick={()=>{borrar()}} shape="round" expand="block" color="medium">Borrar</IonButton></IonCol>
          </IonRow>
        </IonGrid>
      
        <IonGrid>
          <IonRow>
            <IonCol><IonButton onClick={()=>{setText(7);setNum1(7)}} shape="round" expand="block" color="medium">7</IonButton></IonCol>
            <IonCol><IonButton onClick={()=>{setText(8);setNum1(8)}} shape="round" expand="block" color="medium">8</IonButton></IonCol>
            <IonCol><IonButton onClick={()=>{setText(9);setNum1(9)}}shape="round" expand="block" color="medium">9</IonButton></IonCol>
            <IonCol><IonButton onClick={()=>{suma()}} shape="round" expand="block" color="medium">+</IonButton></IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol><IonButton onClick={()=>{setText(4);setNum1(4)}} shape="round" expand="block" color="medium">4</IonButton></IonCol>
            <IonCol><IonButton onClick={()=>{setText(5);setNum1(5)}} shape="round" expand="block" color="medium">5</IonButton></IonCol>
            <IonCol><IonButton onClick={()=>{setText(6);setNum1(6)}} shape="round" expand="block" color="medium">6</IonButton></IonCol>
            <IonCol><IonButton onClick={()=>{resta()}} shape="round" expand="block" color="medium">-</IonButton></IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol><IonButton onClick={()=>{setText(1);setNum1(1)}} shape="round" expand="block" color="medium">1</IonButton></IonCol>
            <IonCol><IonButton onClick={()=>{setText(2);setNum1(2)}} shape="round" expand="block" color="medium">2</IonButton></IonCol>
            <IonCol><IonButton onClick={()=>{setText(3);setNum1(3)}} shape="round" expand="block" color="medium">3</IonButton></IonCol>
            <IonCol><IonButton onClick={()=>{multi()}} shape="round" expand="block" color="medium">*</IonButton></IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
          <IonCol></IonCol>
            <IonCol><IonButton onClick={()=>{setNum1(0)}} shape="round" expand="block" color="medium">0</IonButton></IonCol>
            <IonCol><IonButton onClick={()=>{igual()}} shape="round" expand="block" color="medium">=</IonButton></IonCol>
            <IonCol><IonButton onClick={()=>{div()}} shape="round" expand="block" color="medium">/</IonButton></IonCol>
          </IonRow>
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
