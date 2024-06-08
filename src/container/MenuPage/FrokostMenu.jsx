
import React from 'react';
const FrokostMenu = ({ closeModal }) => (
    <div>
            <button className="close" onClick={closeModal}>&times;</button>
<h1>Menu</h1>

<div class="menu-section">
    <h2>FORRETTER</h2>
    <div class="menu-item">
        <span>NACHOS</span> <span class="price">79,-</span>
        <p>Ovnbagte og ostegratinerede torillachips. Serveres med jalapenos, creme fraiche, salsa & guacamole. Tilkøb af ekstra kylling 30,-</p>
    </div>
    <div class="menu-item">
        <span>QUASADILLAS</span> <span class="price">89,-</span>
        <p>Stor hvedemelstortilla fyldt med kylling og ost, herefter ovnbagt. Serveres med creme fraiche & salsa.</p>
    </div>
    <div class="menu-item">
        <span>TEX MEX SNACKKURV</span> <span class="price">89,-</span>
        <p>Paneret jalapenos fyldt med cheddarost, løgringe, mozzarellasticks og paneret kylling. Serveres med BBQ sauce eller chili mayo.</p>
    </div>
    <div class="menu-item">
        <span>TIGERREJER</span> <span class="price">99,-</span>
        <p>Kæmpe rejer, champingnon, løg, hvidløg, peberfrugt, avocado og tomat i chili sauce. Serveres i jernpande med brød til.</p>
    </div>
    <div class="menu-item">
        <span>HVIDLØGSBRØD UDEN/MED OST</span> <span class="price">59/69,-</span>
        <p>Hvedemelstortilla fyldt med hvidløg og ost, bagt i ovnen.</p>
    </div>
</div>

<div class="menu-section">
    <h2>HOVEDRETTER</h2>
    <div class="menu-item">
        <span>BURRITOS DE CARNE ASADA</span> <span class="price">199,-</span>
        <p>Kæmpe hvedemelstortilla fyldt med grillet oksekød, champignon, løg, peberfrugt, cajun sauce og gratineret ost. Serveres med salat, jalapenos, guacamole, salsa, creme fraiche og pommes frites.</p>
    </div>
    <div class="menu-item">
        <span>BURRITOS DE POLLO</span> <span class="price">189,-</span>
        <p>Kæmpe hvedemelstortilla fyldt med kylling, champignon, løg, peberfrugt, BBQ sauce og gratineret ost. Serveres med salat, jalapenos, guacamole, salsa, creme fraiche og pommes frites.</p>
    </div>
    <div class="menu-item">
        <span>FAJITA DE CARNE</span> <span class="price">209,-</span>
        <p>Saftige oksekødsstrimler i mexicansk sauce med peberfrugt, persille, løg, champignon og hvidløg. Serveres på jernpande med salat, salsa, guacamole, creme fraiche, jalapenos, ost og tortilla.</p>
    </div>
    <div class="menu-item">
        <span>FAJITA DE CAMARÓN</span> <span class="price">219,-</span>
        <p>Kæmpe rejer med avocado, sauteret i mexikansk chilisauce med peberfrugt, persille, løg, champignon og hvidløg. Serveres på jernpande, med salat, salsa, guacamole, creme fraiche, jalapenos, ost og tortilla.</p>
    </div>
    <div class="menu-item">
        <span>FAJITA DE POLLO</span> <span class="price">189,-</span>
        <p>Kyllingestrimler i mexicansk sauce med peberfrugt, persille, løg, champignon og hvidløg. Serveres på jernpande med salat, salsa, guacamole, creme fraiche, jalapenos, ost og tortilla.</p>
    </div>
</div>

<div class="menu-section">
    <h2>SALAT</h2>
    <div class="menu-item">
        <span>TACO SALAT</span> <span class="price">179,-</span>
        <p>Oksekøds- og kyllingestrimler, salat, peberfrugt, løg, persille, champignon, cherrytomater og ost. Serveres med tortillachips, guacamole, jalapenos, salsa og creme fraiche.</p>
    </div>
    <div class="menu-item">
        <span>TIGERREJE SALAT</span> <span class="price">169,-</span>
        <p>Tigerrejer, salat, avocado, champignon, løg, hvidløg, peberfrugt, persille, cherrytomater og hvidløgsdressing.</p>
    </div>
</div>

<div class="menu-section">
    <h2>DESSERTER</h2>
    <div class="menu-item">
        <span>CHURROS</span> <span class="price">99,-</span>
        <p>Serveres med vanijleis, flormelis og chokoladesauce.</p>
    </div>
    <div class="menu-item">
        <span>Jordbær med marengs og bourbon is med frugt</span> <span class="price">69,-</span>
    </div>
    <div class="menu-item">
        <span>3 KUGLER IS</span> <span class="price">69,-</span>
        <p>Serveres med frisk frugt, flødeskum & choko sovs.</p>
    </div>
</div>

<div class="menu-section">
    <h2>FROKOST BØFFER</h2>
    <p>VÆLG STEGNING: Rød, medium/rød, Medium, Medium/gennemstegt eller gennemstegt</p>
    <div class="menu-item">
        <span>OKSEFILET</span> <span class="price">149,-</span>
        <p>150g. oksefilet, serveres med garniture, valgfri kartoffel & valgfri sauce.</p>
    </div>
    <div class="menu-item">
        <span>OKSEFILET MED FEDTKANT</span> <span class="price">149,-</span>
        <p>180g. oksefilet, serveres med garniture, valgfri kartoffel & valgfri sauce.</p>
    </div>
    <div class="menu-item">
        <span>OKSEMØRBRAD</span> <span class="price">169,-</span>
        <p>180g. oksemørbrad, serveres med garniture, valgfri kartoffel & valgfri sauce.</p>
    </div>
    <div class="menu-item">
        <span>RIBEYE</span> <span class="price">249,-</span>
        <p>200g. kornopfodret ribeye fra Uruguay serveres med garniture, kartoffel & valgfri sauce.</p>
    </div>
    <div class="menu-item">
        <span>PLANKEBØF OKSEFILET</span> <span class="price">169,-</span>
        <p>180g. oksefilet skåret af Uruguay, serveres med krydret kartoffelmos, garniture & valgfri sauce.</p>
    </div>
    <div class="menu-item">
        <span>PLANKEBØF OKSEMØRBRAD</span> <span class="price">179,-</span>
        <p>180g. oksemørbrad skåret af Uruguay, serveres med krydret kartoffelmos, garniture & valgfri sauce.</p>
    </div>
    <p>VÆLG MELLEM: bearnaise, champignon, peber, whiskey eller rødvinssauce. Pommes frites eller små stegte kartofler.</p>
    <div class="menu-item">
        <span>OVNBAGT LAKS</span> <span class="price">169,-</span>
        <p>Serveres med dagens garniture, grønne asparges, citron, hvidløgssmør og dagens kartoffel.</p>
    </div>
</div>

<div class="menu-section">
    <h2>SPARERIBS</h2>
    <p>Serveres med BBQ glaserede spareribs med kartoffler BBQ sauce.</p>
    <div class="menu-item">
        <span>600g.</span> <span class="price">149,-</span>
    </div>
    <div class="menu-item">
        <span>1200g.</span> <span class="price">179,-</span>
    </div>
</div>

<div class="menu-section">
    <h2>TACOS</h2>
    <div class="menu-item">
        <span>TACOS</span> <span class="price">159,-</span>
        <p>To slags lækre tacos. Én med lækkert oksekød, peberfrugt, løg og stærk cajun sauce. Én med saftig kylling, peberfrugt, løg og BBQ sauce. Serveres med guacamole, salsa, creme fraiche, ost, jalapenos, pommes frites og chili mayo.</p>
    </div>
</div>

<div class="menu-section">
    <h2>CHILI CON CARNE (STÆRK)</h2>
    <div class="menu-item">
        <span>CHILI CON CARNE</span> <span class="price">179,-</span>
        <p>Den originale chili con carne fyldt med hakket oksekød, bønner, majs, peberfrugt, løg, hvidløg, chili, mexicanske krydderier i mexicansk tomatsauce. Serveres i varm gryde med persille, chips, tortilla, guacamole, creme fraiche, salsa, ost og jalapenos.</p>
    </div>
</div>

<div class="menu-section">
    <h2>ENCHILADAS</h2>
    <div class="menu-item">
        <span>ENCHILADAS</span> <span class="price">179,-</span>
        <p>Tre små hvedemelstortillas, med sauteret oksekød, gratineret ost og cajun sauce / sauteret kylling, ost og BBQ sauce / chili con carne, ost og chili sauce. Serveres med salat, jalapenos, guacamole, salsa, creme fraiche og pommes frites.</p>
    </div>
</div>

<div class="menu-section">
    <h2>BURGERE & SANDWICH</h2>
    <div class="menu-item">
        <span>HAMBURGUESA DE POLLO CRUJIENTE</span> <span class="price">149,-</span>
        <p>Briochebolle smurt med chilimayo, paneret sprød kylling, guacamole, mexicansk salsa & pickles. Serveres med pommes frites & chili mayo.</p>
    </div>
    <div class="menu-item">
        <span>HAMBURGUESA DE MEXICARNE</span> <span class="price">149,-</span>
        <p>Briochebolle smurt med chilimayo, saftig hakkebøf, guacamole, cheddarost, mexicansk salsa & pickles. Serveres med pommes frites & chili mayo.</p>
    </div>
    <div class="menu-item">
        <span>MEXICANSK SANDWICH</span> <span class="price">149,-</span>
        <p>Briochebolle med oksetrimler gratineret med cheddarost, tomater, champignon, rødløg, mexicansk salsa, guacamole og jalapenos. Serveres med pommes frites & chili mayo.</p>
    </div>
</div>

<div class="menu-section">
    <h2>BØRNERETTER</h2>
    <div class="menu-item">
        <span>BURRITOS PARA NINOS</span> <span class="price">109,-</span>
        <p>Hvedemelstortillas fyldt med sauteret oksekød og kylling, gratineret med ost. Serveres med BBQ sauce, pommes frites, guacamole og creme fraiche.</p>
    </div>
    <div class="menu-item">
        <span>NUGGEST PARA NINOS</span> <span class="price">89,-</span>
        <p>5 stk. nuggets med pommes frites og ketchup.</p>
    </div>
    <div class="menu-item">
        <span>HAMBURGUESA PARA NINOS</span> <span class="price">119,-</span>
    </div>
</div>

<div class="menu-section">
    <h2>MEXICANSKE RETTER</h2>
    <div class="menu-item">
        <span>CLASSIC BURGER</span> <span class="price">139,-</span>
        <p>Hjemmelavet hakket oksekød i briochebolle, med friske tomater, hjemmelavet BBQ-sauce, mayo, rødløg og salat. Serveres med pommes frites og mayo. Dobbelt bøf i burger, 179,-</p>
    </div>
    <div class="menu-item">
        <span>BACON BURGER</span> <span class="price">149,-</span>
        <p>Hjemmelavet hakket oksekød i briochebolle, med sprød bacon og cheddarost, mayo, rødløg, tomat og salat. Serveres med pommes frites og mayo. Dobbelt bøf i burger, 189,-</p>
    </div>
    <div class="menu-item">
        <span>RÖSTI BURGER</span> <span class="price">159,-</span>
        <p>Hakket oksekød i briochebolle, med stor rösti og cheddarost, bearnaisesauce, rødløg og salat. Serveres med pommes frites og chili mayo.</p>
    </div>
    <div class="menu-item">
        <span>OCEAN BURGER</span> <span class="price">149,-</span>
        <p>Briochebolle med fiskefilet, rejer, friske tomater, rødløg, salat, asparges og rød dressing. Serveres med pommes frites og mayo.</p>
    </div>
    <div class="menu-item">
        <span>Lakse sandswich</span> <span class="price">159,-</span>
        <p>Laks, salat, pesto, rejer, avocado, tomat og løg. Serveres med pommes frites, citron og mayo.</p>
    </div>
</div>

<div class="menu-section">
    <h2>SALATBAR</h2>
    <div class="menu-item">
        <span>SALATBAR HOVEDRET</span> <span class="price">79,-</span>
        <p>Spis så meget du har lyst til, inklusiv brød og smør.</p>
    </div>
    <div class="menu-item">
        <span>SALATBAR TILBEHØR</span> <span class="price">39,-</span>
        <p>Som tilbehør til hovedret.</p>
    </div>
</div> </div>
);
 export default FrokostMenu

