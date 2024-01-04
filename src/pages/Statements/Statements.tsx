import React from 'react';
import { IonPage, IonContent, IonButtons, IonBackButton, IonToolbar, IonHeader } from '@ionic/react';
import './Statements.css'
const Statements: React.FC = () => {
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
                    <p>Statements</p>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Statements;