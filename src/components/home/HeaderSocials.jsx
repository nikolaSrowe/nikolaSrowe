import React from 'react';

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/nikolarowe/?igsh=amx2dnVucDM3NGk3&utm_source=qr"
        className="home__socials-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>

      {/* Placeholder for Discord */}
      <a
        href="https://discord.com"
        className="home__socials-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-discord"></i>
      </a>

      <a
        href="https://www.pinterest.ca/monetofclaude/?invite_code=8d1ecdbbfe234b5eb6f559f4bf72d4bb&sender=650277771104337292"
        className="home__socials-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-pinterest"></i>
      </a>

      <a
        href="https://open.spotify.com/user/nsarowe?si=B5XdphxOSNK2ObOsiRiEVg"
        className="home__socials-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-spotify"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
