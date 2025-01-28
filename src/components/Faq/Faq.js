import React, { useState } from 'react';
import { FaqCollapse } from './FaqCollapse';
import faqImage from "../Styling/img/faqImage2.jpg";
import { Title } from '../Title/Title';

export const Faq = () => {
  const [openFaqId, setOpenFaqId] = useState(null);

  const handleToggle = (id) => {
    setOpenFaqId(prevId => (prevId === id ? null : id));
  };




  return (
    <section id='faq' className='flexColCenter'>
      <div className='flexRowCenter' style={{ width: "100%" }}>
        <div>
          <img src={faqImage} className='faqImage' alt="FAQ" />
        </div>
        <div className='flexColArround faqCollapsSection'>
          <Title text={"FAQ"} />
          <FaqCollapse
            // paragraphe={"Un nettoyage régulier de votre cuve à fioul prolonge sa durée de vie et optimise son efficacité. Cela permet également d'éviter les pannes et les problèmes de combustion."}
            question={"Quels sont les avantages de faire nettoyer ma cuve à fioul régulièrement ?"}
            id={1}
            isOpen={openFaqId === 1}
            onToggle={() => handleToggle(1)}
          >
            <div>
      Un nettoyage régulier de votre cuve à fioul prolonge sa durée de vie et optimise son efficacité. Cela permet également d'éviter les pannes et les problèmes de combustion.
    </div>
          </FaqCollapse>
          <hr style={{ color: 'black', width: "100%" }} />
          <FaqCollapse
         
            question={"Comment se déroule la neutralisation d'une cuve hors d'usage ?"}
            id={2}
            isOpen={openFaqId === 2}
            onToggle={() => handleToggle(2)}
          > <div>
     
          <p style={{marginBottom:0}}>
            La neutralisation d'une cuve à fioul hors d'usage se déroule en plusieurs étapes précises pour garantir la sécurité et le respect des normes environnementales :
          </p>
    
          
          <p style={{marginBottom:0}}>
            <strong>Vidange et dégazage :</strong>La cuve est d'abord vidangée pour retirer les résidus de fioul encore présents. Ensuite, un dégazage est réalisé pour éliminer les vapeurs inflammables, assurant ainsi la sécurité de l'intervention.
          </p>
    
       
          <p style={{marginBottom:0}}>
          <strong>Nettoyage intérieur :</strong> La cuve est nettoyée afin de retirer les boues et les dépôts restants à l'intérieur. Ce nettoyage permet de préparer la cuve pour les prochaines étapes.
          </p>
    
      
          <p style={{marginBottom:0}}>
          <strong>Neutralisation :</strong>  Une fois nettoyée, la cuve est remplie avec un matériau inerte, comme du sable, du béton ou de la perlite. Cette étape permet de rendre la cuve définitivement inutilisable et sécurisée.
          </p>
    
    
          <p style={{marginBottom:0}}>
          <strong>Contrôle et certificats :</strong>   Après l'opération, un contrôle est effectué pour vérifier la conformité de la neutralisation. Un certificat est ensuite délivré au propriétaire, attestant que la cuve a bien été neutralisée conformément aux normes en vigueur.
            Il est important de faire appel à une entreprise spécialisée pour s'assurer que toutes les étapes sont réalisées en respectant les règles de sécurité et les réglementations environnementales.
          </p>
        </div>
        </FaqCollapse>
          <hr style={{ color: 'black', width: "100%" }} />
          <FaqCollapse
           
            question={"Combien de temps prend la dépose d'une cuve à fioul ?"}
            id={3}
            isOpen={openFaqId === 3}
            onToggle={() => handleToggle(3)}
          >
            {`La dépose d'une cuve à fioul, qu'elle soit aérienne ou enterrée, prend généralement une
demi-journée. Les équipes spécialisées veillent à travailler rapidement tout en respectant les
normes de sécurité. Cependant, la durée peut légèrement varier selon l'accès au site et l'état
de la cuve. Une visite préalable permet de confirmer cette estimation.`}
            </FaqCollapse><hr style={{ color: 'black', width: "100%" }} />
          <FaqCollapse
            // paragraphe={"Un nettoyage régulier de votre cuve à fioul prolonge sa durée de vie et optimise son efficacité. Cela permet également d'éviter les pannes et les problèmes de combustion."}
            question={"Quels sont les risques d'une cuve à fioul mal entretenue ?"}
            id={4}
            isOpen={openFaqId === 4}
            onToggle={() => handleToggle(4)}
          >
             <div>
 
      <p style={{marginBottom:0}}>
        Une cuve à fioul mal entretenue présente plusieurs risques importants, tant pour la sécurité que pour l’environnement :
      </p>

    
      <p style={{marginBottom:0}}>
      <strong>Fuites et contamination :</strong> Avec le temps, des fissures ou des points de corrosion peuvent apparaître, entraînant des fuites de fioul. Cela peut contaminer le sol et les nappes phréatiques, ce qui pourrait engendrer des coûts de dépollution élevés.
      </p>

   
      <p style={{marginBottom:0}}>
      <strong>Risque d'incendie ou d'explosion :</strong>  Le fioul est une substance inflammable. Une cuve mal entretenue peut accumuler des vapeurs inflammables, augmentant ainsi les risques d'incendie ou d'explosion, notamment en cas de dégazage insuffisant.
      </p>

     
      <p style={{marginBottom:0}}>
      <strong>Mauvais rendement du système de chauffage :</strong>  Les boues et dépôts qui s'accumulent au fond de la cuve peuvent perturber le bon fonctionnement de votre système de chauffage, réduisant son efficacité et augmentant la consommation de fioul.
      </p>

    
      <p style={{marginBottom:0}}>
      <strong>Non-conformité aux normes :</strong>  Une cuve non entretenue peut rapidement devenir non conforme aux réglementations en vigueur. Cela peut entraîner des sanctions en cas de contrôle ou de vente de votre bien immobilier.
      </p>
    </div>
            </FaqCollapse><hr style={{ color: 'black', width: "100%" }} />
          <FaqCollapse
            // paragraphe={"Un nettoyage régulier de votre cuve à fioul prolonge sa durée de vie et optimise son efficacité. Cela permet également d'éviter les pannes et les problèmes de combustion."}
            question={"Quels sont les risques d'une cuve à fioul mal entretenue ?"}
            id={5}
            isOpen={openFaqId === 5}
            onToggle={() => handleToggle(5)}
          >
               <div>
   
      <p style={{marginBottom:0}}>
        Faire appel à un professionnel est essentiel pour garantir la sécurité et la conformité aux réglementations.
        Un expert assure :
      </p>

   
      <p style={{marginBottom:0}}>
      <strong>Respect des normes :</strong>   Ils s'assurent que la dépose ou neutralisation respecte les lois environnementales et de sécurité.
      </p>

 
      <p style={{marginBottom:0}}>
      <strong>Sécurité :</strong>  Le fioul est inflammable et les professionnels sont équipés pour gérer les risques liés aux vapeurs et aux fuites.
      </p>


      <p style={{marginBottom:0}}>
      <strong>Gestion des résidus :</strong>   Ils nettoient et éliminent les résidus de manière écologique.
      </p>

     
      <p style={{marginBottom:0}}>
      <strong>Certificat de conformité :</strong>  Un document officiel vous est fourni, prouvant que la cuve a été correctement traitée.
      </p>
    </div>
            </FaqCollapse><hr style={{ color: 'black', width: "100%" }} />
        </div>
      </div>
    </section>
  );
};
