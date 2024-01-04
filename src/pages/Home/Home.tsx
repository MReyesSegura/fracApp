// src/pages/Home.tsx
import React from 'react';
import { IonContent, IonPage, IonButtons, IonButton, IonIcon, IonMenuButton, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { alarm, document } from 'ionicons/icons';
import './Home.css'


const Home: React.FC = () => {
    const history = useHistory();

    const redirectToComponent = (componentName: string) => {
        history.push(`/${componentName}`);
    };

    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons>
                            <IonMenuButton />
                            <IonTitle>HOME</IonTitle>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <div className="main">
                    <div className="buttons">
                        <IonButton size='small' onClick={() => redirectToComponent('profile')}>
                            <IonIcon icon={alarm} />
                            Component 1
                        </IonButton>
                        <IonButton size='small' onClick={() => redirectToComponent('notices')}>
                            <IonIcon icon={document} />
                            Component 2
                        </IonButton>
                    </div>
                </div>

            </IonContent>
        </IonPage>
    );
};

export default Home;
