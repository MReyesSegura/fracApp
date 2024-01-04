import React from 'react';
import { IonPage, IonContent, IonButtons, IonBackButton, IonToolbar, IonHeader } from '@ionic/react';
import './Accesses.css'
const Accesses: React.FC = () => {
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
                    <p>Accesses</p>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Accesses;