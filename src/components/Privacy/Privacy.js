import React from 'react'
import {Title} from '../Title/Title'
import './Privacy.css'

export const Privacy = () => {
  return (
    <section id='privacy'>
        <div className='container p-4'>
            <Title text={"POLITIQUE DE CONFIDENTIALTE"}/>
            <h4>1. Introduction</h4>
      <p>
        Chez miKaza-renov, nous accordons une importance primordiale à la protection de vos données personnelles. 
        Cette Politique de confidentialité décrit la manière dont nous collectons, utilisons, protégeons et partageons vos informations personnelles lorsque vous visitez notre site web ou utilisez nos services. 
        Elle est conforme aux lois en vigueur, notamment le Règlement Général sur la Protection des Données (RGPD).
      </p>

      <h4>2. Données personnelles collectées</h4>
      <p>
        Nous collectons les informations que vous nous fournissez directement lors de l’utilisation de notre site, en particulier lorsque vous :
      </p>
      <ul>
        <li>Demandez un devis : Nous recueillons votre nom, prénom, adresse, numéro de téléphone, email, type de service souhaité, la capacité de votre cuve à fioul et son accessibilité.</li>
        <li>Nous contactez via le formulaire : Nous collectons votre nom, prénom, adresse, numéro de téléphone, email, type de service souhaité, ainsi que les commentaires que vous laissez.</li>
      </ul>

      <h4>3. Utilisation des données personnelles</h4>
      <p>Les informations que nous collectons sont utilisées aux fins suivantes :</p>
      <ul>
        <li>Traiter vos demandes de devis et vous fournir des informations précises sur nos services.</li>
        <li>Vous contacter pour des questions liées à nos services ou à votre demande.</li>
        <li>Améliorer nos services et vous offrir une expérience personnalisée sur notre site web.</li>
        <li>Respecter nos obligations légales, notamment en matière de facturation et de gestion des contrats.</li>
      </ul>

      <h4>4. Base légale du traitement</h4>
      <p>Nous traitons vos données personnelles sur la base des fondements légaux suivants :</p>
      <ul>
        <li>Exécution d’un contrat : Pour fournir les services que vous avez demandés, tels que le traitement de vos demandes de devis et la communication liée aux services.</li>
        <li>Consentement : Lorsque vous nous contactez via le formulaire ou lorsque vous acceptez de recevoir des communications de notre part.</li>
        <li>Intérêt légitime : Améliorer notre site et nos services, ainsi que répondre à vos demandes de manière efficace.</li>
      </ul>

      <h4>5. Partage des données personnelles</h4>
      <p>
        Vos données personnelles sont exclusivement utilisées par miKaza-renov et ne seront jamais vendues à des tiers. 
        Nous pouvons toutefois être amenés à partager vos informations avec les parties suivantes :
      </p>
      <ul>
        <li>Prestataires de services : Ceux qui nous aident à gérer notre site web, nos outils de gestion des demandes, ou encore le traitement des devis, dans le respect de cette politique.</li>
        <li>Obligations légales : Si la loi nous y oblige, nous pouvons être amenés à divulguer vos informations.</li>
      </ul>

      <h4>6. Sécurité de vos données</h4>
      <p>
        Nous mettons en place des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, utilisation abusive, perte ou destruction. 
        Cependant, aucun système de transmission ou de stockage de données n'est totalement sécurisé et nous ne pouvons garantir une sécurité absolue.
      </p>

      <h4>7. Conservation des données</h4>
      <p>
        Nous conservons vos données personnelles aussi longtemps que nécessaire pour répondre aux finalités pour lesquelles elles ont été collectées, et dans le respect des obligations légales applicables. 
        Cela signifie que nous conservons vos données pendant la durée de notre relation contractuelle, puis pour une période raisonnable afin de répondre à des obligations comptables, légales ou fiscales.
      </p>

      <h4>8. Vos droits</h4>
      <p>Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :</p>
      <ul>
        <li>Droit d’accès : Vous pouvez demander une copie des données personnelles que nous détenons à votre sujet.</li>
        <li>Droit de rectification : Vous pouvez nous demander de corriger toute donnée personnelle inexacte ou incomplète.</li>
        <li>Droit à l’effacement : Vous pouvez demander la suppression de vos données personnelles, sauf si leur traitement est nécessaire pour des obligations légales.</li>
        <li>Droit d’opposition : Vous pouvez vous opposer au traitement de vos données pour certaines finalités.</li>
        <li>Droit à la portabilité : Vous pouvez demander à recevoir vos données personnelles dans un format structuré et lisible par machine.</li>
      </ul>
      <p>Pour exercer vos droits, veuillez nous contacter à l’adresse email suivante : contact@mikaza-renov.fr</p>

      <h4>9. Cookies et technologies similaires</h4>
      <p>
        Notre site utilise des cookies pour améliorer votre expérience de navigation. Un cookie est un petit fichier texte qui est placé sur votre appareil lorsque vous visitez notre site. 
        Vous pouvez à tout moment gérer vos préférences en matière de cookies via les paramètres de votre navigateur.
      </p>

      <h4>10. Modifications de la politique de confidentialité</h4>
      <p>
        Nous nous réservons le droit de mettre à jour cette Politique de confidentialité à tout moment. 
        En cas de modification substantielle, nous vous en informerons via notre site web ou par tout autre moyen de communication pertinent.
      </p>

      <h4>11. Contact</h4>
      <p>
        Si vous avez des questions concernant notre politique de confidentialité ou le traitement de vos données, vous pouvez nous contacter à l’adresse email suivante : 
        contact@mikaza-renov.fr
      </p>
            
        </div>
    </section>
  )
}
