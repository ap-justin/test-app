export default function Home() {
  return (
    <>
      hello world
      <iframe
        src="https://staging.better.giving/donate-widget/32?isDescriptionTextShown=true&splitDisabled=true&liquidSplitPct=38&methods=stripe%2Cdaf&isTitleShown=true&accentPrimary=%232D89C8&accentSecondary=%23E6F1F9"
        width="700"
        height="900"
        style={{ border: "0px" }}
      />
    </>
  );
}
