import React from 'react'
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    url: 'https://i.hizliresim.com/iiiixx7.jpg',
  },
  {
    url: 'https://i.hizliresim.com/hd6oewc.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1604286849106-1439c4ed7840?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80'
  },
  {
    url: 'https://images.unsplash.com/photo-1621782866604-81bad221f9a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
]
const slideCount = slides.length - 1;




const nextSlide = () => {
  const currentSlide = document.querySelector('.image img');
  const currentSlideIndex = slides.findIndex((slide) => slide.url === currentSlide.src);
  const nextSlideIndex = currentSlideIndex + 1;
  if (nextSlideIndex > slideCount) {
    currentSlide.src = slides[0].url;
  } else {
    currentSlide.src = slides[nextSlideIndex].url;
  }
};


const prevSlide = () => {
  const currentSlide = document.querySelector('.image img');
  const currentSlideIndex = slides.findIndex((slide) => slide.url === currentSlide.src);
  const prevSlideIndex = currentSlideIndex - 1;
  if (prevSlideIndex < 0) {
    currentSlide.src = slides[slideCount].url;
  } else {
    currentSlide.src = slides[prevSlideIndex].url;
  }
};

// change slider image by time in react




const HomePage = () => {

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className='mainpage' id='about'>
      <div className='mainflex'>
        <div className="text">
          <div className="text-container">
            <h1>LEUCH STORE</h1>
            <p>Her şey önce bir hayal ile başladı. Sonra o hayal bir amaç ve vizyon ile hayata geçti.

              Leuchstore, araç piyasasını yakından takip eden ya da ilgi duyan herkesi bu akımla buluşturmak maksadıyla 2022 yılında Erzrurum'da kuruldu. Renklerin gücü mottosuyla ticari hayatına adım atan Leuchstore; zamanla müşterilerine sunduğu ürün gruplarını hem kategori hem tasarım hem de erişim anlamında çok daha ciddi bir büyüklüğe taşımayı amaçlamaktadır. </p>
            <p>Güncel olarak Türkiye'nin 81 iline ürün göndererek, her gün yüzlerce kişinin hayal ettiği arabaları şık gösteren dünya trendlerini, sürüşü keyifli hale getiren akımlarını ürün seçimlerinde ciddiyetle takip eden pazarlama karakterini her daim kendisine merkez edinmektedir.

              Leuchstore'nin en önemsediği konulardan birisi hızlı teslimat; Sitemizden verilen siparişler en geç 3 iş günü içinde kargo firmalarına teslim edilir.
            </p>
            <p>
            Değişim yapılması toplumsal kullanım kuralları gereği yasak olan ürünler hariç 05307464899’dan aldığınız ürün ya da ürünleri beğenmediğiniz takdirde koşulsuz iade edebilirsiniz. Siparişinizle beraber size gönderilen iade-değişim formunu doldurup, formada da belirtildiği şekilde bizim yönlendirmemiz ile tarafımıza geri gönderebilirsiniz.</p>

            <Link to='/page404' className='btn btn-primary'>Read More</Link>
          </div>
        </div>
        <div className="image">
          <img src={`${slides[1].url}`} alt="home" />
          <div className="img-buttons">
            <button onClick={nextSlide} className="btn btn-primary"><BiArrowFromRight /></button>
            <button onClick={prevSlide} className="btn btn-primary"><BiArrowFromLeft /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage