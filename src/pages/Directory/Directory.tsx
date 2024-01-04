import React from 'react';
import { IonPage, IonContent, IonButtons, IonBackButton, IonToolbar, IonHeader } from '@ionic/react';
import './Directory.css'
const Directory: React.FC = () => {
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
                    <p>Directory</p>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Directory;