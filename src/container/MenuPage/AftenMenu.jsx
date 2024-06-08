
    import React from 'react';
import './AftenMenu.css';

const AftenMenu = ({ closeModal })=> (
    <div className='bgBlue'>
            <button className="close" onClick={closeModal}>&times;</button>
    <div class="menu-section">
    <h1>FORRETTER</h1>
    <div class="menu-item">
        <h2>MEXIKANSK TOMATSUPPE <span class="price">79,-</span></h2>
        <p>Serveres med tortilla chips, creme fraiche & brød.</p>
    </div>
    <div class="menu-item">
        <h2>KÆMPEREJER <span class="price">99,-</span></h2>
        <p>Kæmpe rejer, champignon, løg, hvidløg, peberfrugt, avocado og tomat i chili sauce. Serveres i jernpande med brød til.</p>
    </div>
    <div class="menu-item">
        <h2>HVIDLØGSBRØD UDEN/MED OST <span class="price">69/79,-</span></h2>
        <p>Lækker surdejs bagutte med hvidløg og ost, bagt i ovnen.</p>
    </div>
    <div class="menu-item">
        <h2>QUESADILLAS <span class="price">99,-</span></h2>
        <p>Stor hvedemelstortilla fyldt med kylling og ost, herefter ovnbagt. Serveres med creme fraiche og salsa.</p>
    </div>
    <div class="menu-item">
        <h2>TEX MEX SNACKKURV <span class="price">99,-</span></h2>
        <p>Paneret jalapenos fyldt med cheddarost, løgringe, mozzarellasticks og paneret kylling. Serveres med BBQ sauce og chili mayo.</p>
    </div>
    <div class="menu-item">
        <h2>NACHOS <span class="price">79,-</span></h2>
        <p>Ovnbagte og ostegratinerede torillachips. Serveres med jalapenos, creme fraiche, salsa & guacamole. Tilkøb af ekstra kylling 40,-</p>
    </div>
</div>
<div class="menu-section">
    <h1>HOVEDRETTER</h1>
    <div class="menu-item">
        <h2>BURRITOS DE CARNE ASADA <span class="price">189,-</span></h2>
        <p>Kæmpe hvedemelstortilla fyldt med grillet oksekød, champignon, løg, peberfrugt, cajun sauce og gratineret ost. Serveres med salat, jalapenos, guacamole, salsa, creme fraiche og ris.</p>
    </div>
    <div class="menu-item">
        <h2>BURRITOS DE POLLO <span class="price">179,-</span></h2>
        <p>Kæmpe hvedemelstortilla fyldt med kylling, champignon, løg, peberfrugt, BBQ sauce og gratineret ost. Serveres med salat, jalapenos, guacamole, salsa, creme fraiche og ris.</p>
    </div>
    <div class="menu-item">
        <h2>ENCHILADAS <span class="price">179,-</span></h2>
        <p>Tre små hvedemelstortillas, med sauteret oksekød, gratineret ost og cajun sauce / sauteret kylling, ost og BBQ sauce / chili con carne, ost og chili sauce. Serveres med salat, jalapenos, guacamole, salsa, creme fraiche og ris.</p>
    </div>
    <div class="menu-item">
        <h2>FAJITA DE CARNE <span class="price">229,-</span></h2>
        <p>Saftige oksekødsstrimler i cajun sauce med peberfrugt, persille, løg, champignon og hvidløg. Serveres på jernpande med salat, salsa, guacamole, creme fraiche, jalapenos, ost og tortilla.</p>
    </div>
    <div class="menu-item">
        <h2>FAJITA DE POLLO <span class="price">229,-</span></h2>
        <p>Kyllingestrimler i BBQ-sauce med peberfrugt, persille, løg, champignon og hvidløg. Serveres på jernpande med salat, salsa, guacamole, creme fraiche, jalapenos, ost og tortilla.</p>
    </div>
    <div class="menu-item">
        <h2>FAJITA DE CAMARÒN <span class="price">229,-</span></h2>
        <p>Kæmpe rejer med avocado, sauteret i mexikansk chili sauce med peberfrugter, persille, løg, champignon og hvidløg. Serveres på jernpande med salat, salsa, guacamole, creme fraiche, jalapenos, ost og tortilla.</p>
    </div>
    <div class="menu-item">
        <h2>CAMARÒN MONTEREY <span class="price">249,-</span></h2>
        <p>Tigerrejer, sauteret i gryde med tequila, løg, hvidløg, persille, champignon, peberfrugt, avocado, kokosmælk og krydret ostesauce. Serveres med salat, salsa, guacamole, creme fraiche, jalapenos, ost og tortilla.</p>
    </div>
    <div class="menu-item">
        <h2>MEXICARNE GRYDE <span class="price">249,-</span></h2>
        <p>Kyllinge- og oksetrimler sauteret i gryde med løg, hvidløg, persille, champignon, peberfrugt, avocado, kokosmælk og krydret ostesauce. Serveres med salat, salsa, guacamole, creme fraiche, jalapenos, ost og tortilla.</p>
    </div>
    <div class="menu-item">
        <h2>CHILI CON CARNE (STÆRK) <span class="price">219,-</span></h2>
        <p>Den originale chili con carne fyldt med hakket oksekød, bønner, majs, peberfrugt, løg, hvidløg, chili, mexicanske krydderier i mexicansk tomatsauce. Serveres i varm gryde med persille.</p>
    </div>
</div>
<div class="menu-section">
    <h1>LÆKRE BØFFER</h1>
    <p>Vælg 300/400g og få gratis salatbar med.</p>
    <div class="menu-item">
        <h2>OKSEMØRBRAD</h2>
        <p>Kornopfodret oksemørbrad fra Uruguay, serveres med garniture, valgfri kartoffel & valgfri sauce.</p>
        <p>200 g <span class="price">279,-</span></p>
        <p>300 g <span class="price">369,-</span></p>
    </div>
    <div class="menu-item">
        <h2>OKSEFILET</h2>
        <p>Grillet kornopfodret oksefilet, serveres med garniture, valgfri kartoffel & valgfri sauce.</p>
        <p>200 g <span class="price">239,-</span></p>
        <p>300 g <span class="price">329,-</span></p>
    </div>
    <div class="menu-item">
        <h2>RIBEYE</h2>
        <p>Kornopfodret ribeye fra Uruguay, serveres med garniture, valgfri kartoffel & valgfri sauce.</p>
        <p>300 g <span class="price">329,-</span></p>
        <p>400 g <span class="price">399,-</span></p>
    </div>
    <div class="menu-item">
        <h2>ENTRECOTE</h2>
        <p>Saftig og med stor smag, serveres med garniture, kartoffel & valgfri sauce.</p>
        <p>300 g <span class="price">299,-</span></p>
        <p>400 g <span class="price">379,-</span></p>
    </div>
    <div class="menu-item">
        <h2>PLANKEBØF OKSEMØRBRAD</h2>
        <p>Saftig oksemørbrad skåret af Uruguay, serveres med krydret kartoffelmos, garniture & valgfri sauce.</p>
        <p>200 g <span class="price">309,-</span></p>
        <p>300 g <span class="price">379,-</span></p>
    </div>
    <div class="menu-item">
        <h2>PLANKEBØF OKSEFILET</h2>
        <p>Saftig oksefilet skåret af Uruguay, serveres med krydret kartoffelmos & valgfri sauce.</p>
        <p>200 g <span class="price">259,-</span></p>
        <p>300 g <span class="price">329,-</span></p>
    </div>
    <div class="menu-item">
        <h2>KYLLINGEBRYST <span class="price">199,-</span></h2>
        <p>2 styks benfri kyllingefilet uden skind, serveres med garniture, dansk kartoffel & valgfri sauce.</p>
        <p>VÆLG MELLEM: Peber, cajun (stærk), bearnaise, BBQ, rødvinsauce eller champignon sauce. Ekstra 12,-</p>
        <p>VÆLG KARTOFFEL: Stegte krydrede kartoffel eller pommes frites.</p>
        <p>Diverse ekstra: kartoffel og garniture 39,-</p>
    </div>
</div>
<div class="menu-section">
    <h1>BURGERE</h1>
    <div class="menu-item">
        <h2>HAMBURGUESA DE POLLO CRUJIENTE <span class="price">169,-</span></h2>
        <p>Briochebolle smurt med chilimayo, paneret sprød kylling, guacamole, mexicansk salsa & pickles. Serveres med pommes frites & chipotle mayo.</p>
    </div>
    <div class="menu-item">
        <h2>HAMBURGUESA DE MEXICARNE <span class="price">179,-</span></h2>
        <p>Briochebolle smurt med chilimayo, saftig hakkebøf, guacamole, cheddarost, mexicansk salsa & pickles. Serveres med pommes frites & chipotle mayo.</p>
    </div>
</div>
<div class="menu-section">
    <h1>BØRNERETTER</h1>
    <div class="menu-item">
        <h2>BURRITOS PARA NINOS <span class="price">109,-</span></h2>
        <p>Hvedemelstortillas fyldt med sauteret oksekød og kylling, gratineret med ost. Serveres med BBQ sauce, pommes frites, guacamole og creme fraiche.</p>
    </div>
    <div class="menu-item">
        <h2>NUGGEST PARA NINOS <span class="price">89,-</span></h2>
        <p>5 stk. nuggets med pommes frites og ketchup.</p>
    </div>
    <div class="menu-item">
        <h2>HAMBURGUESA PARA NINOS <span class="price">119,-</span></h2>
        <p>Saftig hakkebøf med ketchup. Serveres med pommes frites og ketchup.</p>
    </div>
</div>
<div class="menu-section">
    <h1>DESSERTER</h1>
    <div class="menu-item">
        <h2>CHURROS <span class="price">89,-</span></h2>
        <p>Serveres med vaniljeis og chokoladesauce.</p>
    </div>
    <div class="menu-item">
        <h2>3 KUGLER IS <span class="price">69,-</span></h2>
        <p>Serveres med frisk frugt, flødeskum og chokoladesauce.</p>
    </div>
    <div class="menu-item">
        <h2>Jordbær med marengs og bourbon is med frugt <span class="price">69,-</span></h2>
    </div>
    <div class="menu-item">
        <h2>Vanilje panna cotta, frugt og is <span class="price">79,-</span></h2>
    </div>
    <div class="menu-item">
        <h2>Chokolademousse <span class="price">79,-</span></h2>
        <p>Serveres med vaniljeis, flødeskum og chokoladesovs.</p>
    </div>
</div>
</div>
);

export default AftenMenu;
