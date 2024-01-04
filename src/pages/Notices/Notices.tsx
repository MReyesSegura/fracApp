import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';

const Notices: React.FC = () => {
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
                    <p>Hello2</p>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Notices;