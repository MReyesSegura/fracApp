import React from 'react';
import { IonPage, IonContent, IonButtons, IonBackButton, IonToolbar, IonHeader } from '@ionic/react';
import './Payments.css'
const Payments: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons>
                            <IonBackButton text='Back' defaultHref='/home'></IonBackButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <div>
                    <p>Payments</p>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Payments;