import html2canvas from 'html2canvas';
import React, { useState } from "react";
{/*import imagenes from '../img/2.jpg';*/}

const ImgMemes = ({value}) => {
  /*Pertenece a la imagen*/
  const [imgmeme, setImgmeme] = useState(value);

  /*Pertenece al input/ lo que tenga en setTextmeme (que lo saco de abajo), se lo asigna a textmeme*/
  const [textmeme, setTextmeme] = useState();

  /*La funcipn que esta en el input, se activa cuando písan en el input. e.target.value es lo que se escribe en el input */
  const textomeme = (e) => {
    setTextmeme(e.target.value);
  }

  const seleccionarImg = (e) => {
    setImgmeme(e.target.value);
    
  }

  const descargar = (e) => {
    html2canvas(document.querySelector("#exportar")).then(function(canvas) {
      {/*document.body.appendChild(canvas);*/}
      let img = canvas.toDataURL("memes/jpg");
      let link = document.createElement("a");
      link.download = "memepropio";
      link.href = img;
      link.click();
    });
  }
  

  return (
    <div className="text-center">
      <h1 className="mt-3 mb-3 text-center">Editor de memes</h1>

      <h3>Ingresa la frase</h3>
      <input onChange={textomeme} className="form-control w-50 m-50 m-auto d-block" type="text" placeholder="pone tu frase" name="meme" arial-label="default input example" />

      <h3 className="mt-3 mb-3 text-center">Eleji tu imagen favorita</h3>
      <select onChange={seleccionarImg} className="form-select form-select-lg mb-3 w-50 m-auto" aria-label=".form-select-lg example" >
        <option value={1}>Bob esponja</option>
        <option value={2}>Futurama</option>
        <option value={3}>Homero</option>
        <option value={4}>Calamardo</option>     
        
      </select>

      

      <figure className="text-center" id="exportar">
        <p className="w-100 px-30 position-absolute top-50 start-30 h1 text-center">{textmeme}</p>
        <img src={`../img/${imgmeme}.jpg`} />
       
        
      </figure>

      <button onClick={descargar} type="button" className="btn btn-primary mt-4 mb-4">Descargar meme</button>
      
      {/*<img src={imagenes} alt="no anda" />*/}

    </div>
  )
}

export default ImgMemes;