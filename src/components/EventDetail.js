import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'; // Import the slick carousel component
import './EventDetail.css'; // Import the CSS file for styling

const EventDetail = ({ eventId }) => {
  const navigate = useNavigate(); // React Router navigation hook
  const sliderRef = useRef(null); // Reference for Slick slider

  // Event data for each event
  const events = {
    event1: {
      title: "Karnival Sukan Tradisional kali ke-11",
      description: `Tak lekang dek panas, tak lapuk dek hujan. Tersentak sejenak mengimbau kembali zaman kanak-kanak, bermain permainan tradisional pada waktu petang.
      Kali ini Persatuan Seni Silat Cekak Malaysia Universiti Sains Malaysia bawakan kembali Karnival Sukan Tradisional Kali ke-11 yang menjadikan permainan tradisional sebagai sukan permainan.
      Jadi jom sertai beramai-ramai dan jangan lepaskan peluang keemasan ini!!!`,
      carouselImages: [
        "/kasutra/kasutra.jpg",
        "/kasutra/baju.jpg",
        "/kasutra/game.jpg",
        "/kasutra/logo.jpg",
      ],
      registrationPeriod: "29 Nov 2024 - 1 Jan 2024",
      location: "Stadium Minden, USM",
      dateTime: "13 Januari 2024, 8.00 Pagi",
    },
    event2: {
      title: "Pengambilan Ahli Baharu Dan Daftar Kokurikulum",
      description: `Adakah anda berminat untuk menyertai aktiviti kokurikulum yang menarik dan penuh dengan ilmu seni mempertahankan diri? Mari sertai kami sekarang!!!`,
      carouselImages: [
        "/pab/pab.jpg",
        "/pab/keistimewaan.jpg",
        "/pab/tempat.jpg",
      ],
      registrationPeriod: "8 Oktober 2024",
      location: "Dewan Kuliah P, USM",
      dateTime: "8 Oktober 2024 ,11.00 Pagi",
    },
    event3: {
      title: "Kembara Cekak Lestari",
      description: `Sukacitanya dimaklumkan bahawa PSSCMUSM akan menganjurkan KEMBARA CEKAK LESTARI DAN LAWATAN WARISAN.
      Lawatan Warisan ke Muzium Kedah & Rumah Persatuan PSSCM Cawangan Kedah Sesi Perkongsian oleh panel-panel yang hebat mengenai Silat Cekak,
      Explorace, dan Latihan dalam Kumpulan`,
      carouselImages: [
        "/kcl/kcl.jpg",
        "/kcl/panel.jpg",
      ],
      registrationPeriod: "10 Mei - 12 Mei 2024",
      location: "Universiti Sains Malaysia, Pulau Pinang",
      dateTime: "3 Hari 2 Malam",
    },
    event4: {
      title: "Sulalatus Peradaban Melayu 2.0",
      description: `Persatuan Seni Silat Cekak Malaysia Universiti Sains Malaysia (PSSCMUSM) dengan sukacitanya mempersembahkan Sulalah Peradaban Melayu 4.0 dengan tema:
      Jejak Peradaban : Menghayati Keagungan Warisan Bangsa
      Pagi: Wacana Peradaban Melayu
      Malam: Malam Sayembara Warisan
      MYCSD disediakan bagi pelajar USM`,
      carouselImages: [
        "/spm/spm.jpg",
        "/spm/panel.jpg",
        "/spm/aktiviti.jpg",
        "/spm/logo.jpg",
      ],
      registrationPeriod: "7 Nov 2024 - 31 Dis 2024",
      location: "Dewan Kompleks Cahaya Siswa (KOMCA), Universiti Sains Malaysia",
      dateTime: "4 Januari 2025, 8:00 Pagi - 11:30 Malam",
  },
}
  const event = events[eventId];

  const handleRegistration = () => {
    // Navigate to the registration page for the specific event
    navigate(`/register/${eventId}`);
  };

  if (!event) {
    return <h2>Event Not Found</h2>;
  }

  // Carousel settings for Slick
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows to use custom arrows
  };

  return (
    <div className="event-detail">
      <div className="carousel-container">
        <Slider ref={sliderRef} {...carouselSettings}>
          {event.carouselImages.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image} alt={`${event.title} Poster ${index + 1}`} />
            </div>
          ))}
        </Slider>*/

        {/* Custom Arrow Buttons */}
        <button
          className="carousel-arrow left-arrow"
          onClick={() => sliderRef.current.slickPrev()} // Go to previous slide
        >
          &#8592;
        </button>
        <button
          className="carousel-arrow right-arrow"
          onClick={() => sliderRef.current.slickNext()} // Go to next slide
        >
          &#8594;
        </button>
      </div>

      <div className="event-info">
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <p className="highlight">Tempoh Pendaftaran: {event.registrationPeriod}</p>
        <p className="highlight">Tempat: {event.location}</p>
        <p className="highlight">Tarikh & Masa: {event.dateTime}</p>
        <button className="register-btn" onClick={handleRegistration}>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventDetail;

