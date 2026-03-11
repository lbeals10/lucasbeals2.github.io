document.getElementById("year").textContent = new Date().getFullYear();

const heroSection = document.querySelector(".hero");

if (heroSection) {
  const heroImages = [
    "assets/hero-lighthouse.png",
    "assets/hero-operations.png",
    "assets/hero-ai-network.png",
    "assets/hero-constuction.png",
    "assets/hero-trucks.png",
  ];

  let heroIndex = 0;

  const setHeroBackground = () => {
    heroSection.style.setProperty(
      "--hero-bg-image",
      `url("${heroImages[heroIndex]}")`,
    );
  };

  heroImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  setHeroBackground();

  window.setInterval(() => {
    heroIndex = (heroIndex + 1) % heroImages.length;
    setHeroBackground();
  }, 10000);
}
