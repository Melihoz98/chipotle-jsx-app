

import React from 'react';
import './Drinks.css';

const Drinks = ({ closeModal }) => (
    <div>
          <button className="close" onClick={closeModal}>&times;</button>
<div class="menu-section">
<h1>ØL</h1>
<div class="menu-item">
    <h2>GRIMBERGEN DOUBLE AMBRÉE <span class="price">59,-/79,-/89,-</span></h2>
    <p>Belgisk klosterøl.</p>
</div>
<div class="menu-item">
    <h2>TUBORG CLASSIC <span class="price">49,-/59,-/69,-</span></h2>
    <p>Pilsner med cremede toner af karamel.</p>
</div>
<div class="menu-item">
    <h2>CARLSBERG <span class="price">49,-/59,-/69,-</span></h2>
    <p>Probably the best beer in the world.</p>
</div>
<div class="menu-item">
    <h2>KRONENBURG 1664 BLANC <span class="price">59,-/69,-/79,-</span></h2>
    <p>Frankrigs mest populære hvedeøl.</p>
</div>
<div class="menu-item">
    <h2>CARLSBERG NORDIC <span class="price">49,-</span></h2>
    <p>33 cl. alkoholfri øl på flaske.</p>
</div>
</div>
<div class="menu-section">
<h1>COCKTAILS</h1>
<div class="menu-item">
    <h2>Spicy Jalapeno Margarita <span class="price">79,-</span></h2>
    <p>Tequila, limejuice, med twist af jalapeno skiver.</p>
</div>
<div class="menu-item">
    <h2>Mojito <span class="price">69,-</span></h2>
    <p>Hvid rom, limejuice, sukker, mynteblade og danskvand.</p>
</div>
<div class="menu-item">
    <h2>Mango Splash <span class="price">69,-</span></h2>
    <p>Gin, mango og syrlige citroner.</p>
</div>
<div class="menu-item">
    <h2>Passion Martini <span class="price">69,-</span></h2>
    <p>Vodka, passion, vanilje, sirup og lime.</p>
</div>
<div class="menu-item">
    <h2>Cuba Libre <span class="price">69,-</span></h2>
    <p>Rom, cola og limejuice.</p>
</div>
</div>
<div class="menu-section">
<h1>SODAVAND</h1>
<div class="menu-item">
    <h2>Coca cola, cola zero, fanta, sprite zero, schweppes lemon, danskvand <span class="price">45,-/55,-/65,-</span></h2>
</div>
</div>
<div class="menu-section">
<h1>JUICE</h1>
<div class="menu-item">
    <h2>Æble, appelsin eller tranebær <span class="price">45,-/55,-/65,-</span></h2>
</div>
</div>
<div class="menu-section">
<h1>SØBOGAARD</h1>
<div class="menu-item">
    <h2>Hyldeblomst eller rabarber. Med / uden brus <span class="price">49,-/59,-/69,-</span></h2>
</div>
</div>
<div class="menu-section">
<h1>ICETEA</h1>
<div class="menu-item">
    <h2>Peach, lemon, passion <span class="price">49,-/59,-/69,-</span></h2>
</div>
</div>
<div class="menu-section">
<h1>KILDEVAND</h1>
<div class="menu-item">
    <h2>Aqua Panna Toscana <span class="price">35,-</span></h2>
</div>
</div>
<div class="menu-section">
<h1>VARME DRIKKE</h1>
<div class="menu-item">
    <h2>Filterkaffe <span class="price">29,-</span></h2>
</div>
<div class="menu-item">
    <h2>The - flere varianter, spørg tjeneren <span class="price">39,-</span></h2>
</div>
<div class="menu-item">
    <h2>Irish Coffee <span class="price">49,-</span></h2>
</div>
<div class="menu-item">
    <h2>Mexican Coffee <span class="price">49,-</span></h2>
</div>
<div class="menu-item">
    <h2>Varm kakao med flødeskum <span class="price">59,-</span></h2>
</div>
</div>
<div class="menu-section">
<h1>DRINKS</h1>
<div class="menu-item">
    <h2>Chivas <span class="price">79,-/99,-</span></h2>
</div>
<div class="menu-item">
    <h2>Bailey <span class="price">39,-/59,-</span></h2>
</div>
<div class="menu-item">
    <h2>Bacardi <span class="price">69,-/89,-</span></h2>
</div>
<div class="menu-item">
    <h2>Bombay <span class="price">69,-/89,-</span></h2>
</div>
<div class="menu-item">
    <h2>Jack Daniels <span class="price">69,-/89,-</span></h2>
</div>
</div>
<div class="menu-section">
<h1>VINE</h1>
<div class="menu-item">
    <h2>La Marca Prosecco DOC Treviso Extra Dry <span class="price">gl. 65,-/fl. 275,-</span></h2>
    <p>Tør og appetitvækkende.</p>
</div>
<div class="menu-item">
    <h2>Wave Rosso Sicilia <span class="price">gl. 65,-/fl. 229,-</span></h2>
    <p>Frugtig og blød i udtrykket med lette noter af moden frugt.</p>
</div>
<div class="menu-item">
    <h2>Le Morette Serai Rosso IGT <span class="price">gl. 69,-/fl. 249,-</span></h2>
    <p>Solbær, blomme, rabarber og vanilje.</p>
</div>
<div class="menu-item">
    <h2>Zinfandel Reserva Lodi-USA <span class="price">gl. 69,-/fl. 299,-</span></h2>
    <p>Blød frugt, laurbær og lavendler.</p>
</div>
<div class="menu-item">
    <h2>Heartland - Australien <span class="price">fl. 389,-</span></h2>
    <p>Frugtmættet bouquet med nuancer af solbær, kirsebær og vanilje.</p>
</div>
<div class="menu-item">
    <h2>Chianti Classico - Italien <span class="price">fl. 379,-</span></h2>
    <p>Frugtrig vin med bløde nuancer.</p>
</div>
<div class="menu-item">
    <h2>Amarone - Italien <span class="price">fl. 379,-</span></h2>
    <p>En god og tør vin, fremstillet af lækre tørrede druer.</p>
</div>
<div class="menu-item">
    <h2>Wave Rosato Sicilia <span class="price">gl. 69,-/fl. 229,-</span></h2>
    <p>Blid og forfriskende med lette frugtige noter.</p>
</div>
<div class="menu-item">
    <h2>Le Morette Bardolino Chiaretto Rosé <span class="price">gl. 69,-/fl. 249,-</span></h2>
    <p>Frisk smag, fyldig og velafbalanceret med intense frugtagtige fornemmelser.</p>
</div>
<div class="menu-item">
    <h2>Wave Bianco Sicilia <span class="price">gl. 65,-/fl. 229,-</span></h2>
    <p>Let og frisk i udtrykket.</p>
</div>
<div class="menu-item">
    <h2>Le Morette Serai Bianco IGT <span class="price">gl. 69,-/fl. 249,-</span></h2>
    <p>Perfekt ledsager til fiskeretter eller blot som aperitif.</p>
</div>
<div class="menu-item">
    <h2>Oscar Hausmann OG01 Riesling Semi Sweet <span class="price">gl. 65,-/fl. 229,-</span></h2>
    <p>Frisk og frugtig Riesling i høj kvalitet.</p>
</div>
<div class="menu-item">
    <h2>Pellehaut - Frankrig <span class="price">gl. 69,-/fl. 279,-</span></h2>
    <p>God og frisk allround vin.</p>
</div>
<div class="menu-item">
    <h2>Pont Neuf - Frankrig <span class="price">gl. 69,-/fl. 269,-</span></h2>
    <p>En varm og krydderig vin.</p>
</div>
</div></div>
);
export default Drinks;
