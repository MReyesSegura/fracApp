import React from 'react';
import { IonPage, IonContent, IonButtons, IonBackButton, IonToolbar, IonHeader } from '@ionic/react';
import './Events.css'
const Events: React.FC = () => {
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
                    <p>Events</p>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Events;