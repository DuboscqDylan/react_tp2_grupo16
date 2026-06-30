export const exportArtistPDF = async (cardRef, artistName) => {
  if (!cardRef?.current) {
    console.error("Ref no encontrada");
    return;
  }

  const canvas = await html2canvas(cardRef.current, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#121212",
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");

  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

  pdf.save(`${artistName}.pdf`);
};