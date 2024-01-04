// src/pages/Login.tsx
import React from 'react';
import { IonContent, IonPage, IonInput, IonButton } from '@ionic/react';

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonInput placeholder="Username"></IonInput>
                <IonInput type="password" placeholder="Password"></IonInput>
                <IonButton routerLink="/home" expand="full">Login</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Login;
