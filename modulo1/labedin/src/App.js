import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/a-/AOh14Gj_kilfDwHZkvDy9OnEPp6M9PmoHWORtCU6XLIc=s576-p-rw-no" 
          nome="Pedro Durand" 
          descricao="Oi, eu sou o Pedro Durand. Sou uma pessoa extrovertida, fascinada por tecnologia. Sou desenvolvedor na Boticário e tenho sede para transformar o mundo num lugar melhor através de códigos."
        />
        
        <ImagemButton 
          imagem="https://www.flaticon.com/svg/vstatic/svg/3917/3917172.svg?token=exp=1653569626~hmac=c071a1f345f46a58dd29a697eb88c202" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno
        imagem="https://www.jacui.mg.leg.br/imagens/email.png"
        contato="Email"
        info=" webpedrod@gmail.com"/>
        <CardPequeno
        imagem="http://cdn.onlinewebfonts.com/svg/img_339206.png"
        contato="Endereço"
        info=" Rua Agostinho Gama, 41"/>
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://digitaliza-institucional.s3.us-east-2.amazonaws.com/institucional/secretarias/imagens/capturar1-06-07-2021%20-%20puXld.png" 
          nome="Obra Rio" 
          descricao="Negócio de reformas próprio, atraia os clientes através da internet e vendia serviços de reforma como Drywall e pintura." 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" 
          nome="Social Media Creator" 
          descricao="Criador de conteudo para redes sociais. Já administrei mais 10 Instagram simultâneos e milhões de visualizações nas páginas dos clientes." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
