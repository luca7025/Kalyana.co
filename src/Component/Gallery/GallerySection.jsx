import React from 'react';
import styles from './GallerySection.module.css';
import galleryData from '../../data/albumData.json';

const GallerySection = () => {
  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.galleryTitle}>Wedding Albums</h2>
      <div className={styles.albumGrid}>
        {galleryData.map((album) => (
          <div key={album.id} className={styles.albumCard}>
            <img
              src={album.coverImage}
              alt={`${album.title} Cover`}
              className={styles.coverImage}
            />
            <div className={styles.albumInfo}>
              <h3 className={styles.title}>{album.title}</h3>
              <p className={styles.location}><strong>Location:</strong> {album.location}</p>
              <p className={styles.date}>
                <strong>Date:</strong> {new Date(album.date).toLocaleDateString()}
              </p>
              <p className={styles.description}>{album.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
