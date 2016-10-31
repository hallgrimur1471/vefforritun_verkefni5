
# Verkefni 5

## Lýsing

Verkefnið er tvíþætt:

1. Útbúa einingu með prófum sem sér um margföldun
2. Setja upp einfaldan vef með _Express_ sem notar margföldunareiningu

Ekki þarf að notast við Gulp í verkefninu (þó það sé í lagi t.d. til að setja upp BrowserSync) og í grind að lausn er búið að setja upp _NPM scriptur_:

* `npm start` kveikir á vefþjón sem skilgreindur er í `bin/www`, athugið að fyrst þarf að útfæra `src/app.js`
* `npm test` keyrir Mocha á allar skrá undir `src` sem enda á `.test.js`
* `npm run watch -s` keyrir Mocha og fylgist með breytingum á skrám og lætur vita af niðurstöðum prófa
* `npm run coverage -s` keyrir Istanbul coverage greiningu á test kóða og því sem hann testar

`npm run` sér um að keyra önnur próf en þau sem NPM býst við. `-s` (silent) sleppir okkur við óþarfa texta frá NPM

### Margföldunareining

Útbúa skal einingu sem býður upp á þrjár aðferðir:

* `splitIntoNumbers` sem tekur við streng og skiptir honum upp á _whitespace_, `,` eða `;` og skilar fylki af aðeins þeim tölum sem fundust í streng
* `multiply` sem tekur við fylki af tölum og margfaldar þeim saman, ef engar tölur eru í fylki, eða einhver gildi sem ekki eru tölur, skilar fallið `null`
* `factorize` sem tekur við tölu og skilar fylki af öllum þáttum hennar, ef input er ekki tala engir þættir finnast skal skila tóma fylkinu. Ekki á að finna þætti fyrir neikvæðar tölur heldur skila tóma fylki. Útfærsla á falli þarf ekki að vera fullkomin eða hröð, aðeins að skila réttum niðurstöðum.

Gefinn er grunnur að `multiplier.js` og `multiplier.test.js` og skal _code coverage_ fyrir `multiplier.js` vera 100% í öllum liðum sem gefin eru upp þegar `npm run coverage` er keyrt (statements, branches, functions og lines).

### Express vefur

Setja skal upp Express vef sem hefur eina síðu og tvö _route_. Ekki þarf að útfæra neitt JavaScript _á framenda_ og krafa um CSS er í lágmarki, bara að þetta sé sæmilega snyrtilegt.

Forsíðu svarar á `/` og birtir form með textasvæði. Þegar það form er sent með `POST` skal annað _route_ taka við sem skilar svari með því að senda gögn í margföldunarvirkni sem áður var skilgreind. Taka skal tillit til þess hvort ein eða fleiri niðurstaða sé til staðar, þ.e.a.s., ekki skrifa út "Fann tölurnar: 1" heldur "Fann töluna: 1". Sjá fyrirmynd í `example.gif`.

Skilgreina skal Express kóða í `src/app.js`. Nota skal Pug (nýjasta útgáfa Jade) fyrir sniðmát og þarf að setja þau upp sérstaklega.

## Mat
* 20% - JavaScript (á bakenda) snyrtilegt og **engar** lint villur m.v. gefið `.eslintrc`
* 40% - Express virkni með Pug template
* 40% - Margföldunarvirkni með prófum og 100% coverage

## Sett fyrir
Verkefni sett fyrir á Uglu 26. október 2016.

## Skil
Senda skal tölvupóst til dæmatímakennara með fyrirsögn "Vefforritun - Verkefni 5" fyrir lok dags 6. nóv. Póstur skal innihalda:

* Zip skjal með lausn sem heitir `notendanafn.zip`

Ekki skal skila `/node_modules` möppu. Verkefni verða opnuð í möppu og þar skrifað:
```
npm install
npm test
```

og við það ætti að skrifast út að engar lint villur séu í kóða, öll test keyri og að coverage sé 100% í öllum liðum.

```
npm start
```

er síðan keyrt til að kveikja á vefþjón.

## Einkunn
Sett verða fyrir sex verkefni þar sem fimm bestu gilda 6% hvert, samtals 30%.
