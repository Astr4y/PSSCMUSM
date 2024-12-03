import React from 'react';

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="youtube">
        <iframe //used to embed yt vid
          src="https://www.youtube.com/embed/Z767FWTc2ys"
          title="PSSCMUSM YouTube Channel"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="description">
        <h2>Kenali Silat Cekak Malaysia USM</h2>
        <p>
          Persatuan Seni Silat Cekak Malaysia Universiti Sains Malaysia (PSSCMUSM)
          telah dijadikan mata pelajaran kokurikulum dengan menawarkan 6 kredit atau unit
          untuk tempoh pengajian selama 6 semester di kampus USM. Mata Pelajaran Seni Silat Cekak Malaysia sangat ringkas, padat dan efektif. 
          Terdapat 21 buah matapelajaran, yang mana ia menekankan kepada 99% mempertahankan diri dan 1% menyerang.
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
