(function(){
  const dict={
    en:{
      title:'Burnout Screening and Workplace Action Plan Tool',
      by:'Created by Dr Suriya Kumareswaran',
      langA:'English',
      langB:'Bahasa Malaysia',
      nav:['Start','What is CBI?','Explanation','Questionnaire','Stressors','Results','Plan'],
      mobile:['Start','What is CBI?','Explanation','Questionnaire','Stressors','Results','Action Plan + References'],
      progress:'Question progress',
      hero:'Screen your CBI domains, identify practical workplace issues, and prepare a personal action plan that can be printed or saved.',
      startBtn:'Start Questionnaire',
      what:'What is CBI?',
      minis:['Questions','CBI domains','Print / Save'],
      cbiTitle:'What is the Copenhagen Burnout Inventory?',
      cbiText:'CBI is a structured burnout questionnaire. It separates exhaustion into three practical domains so the result can guide action, not just give one score.',
      cards:[
        ['Personal Burnout','General physical and emotional exhaustion, regardless of work source.'],
        ['Work-Related Burnout','Exhaustion connected to workload, role, control, schedule, and work design.'],
        ['Client / Patient Burnout','Exhaustion connected to client-facing, patient-facing, or emotionally demanding service work.']
      ],
      beforeTitle:'Before You Use',
      beforeText:'This individual tool supports reflection, workplace discussion, and early action planning. It is not a medical diagnosis.',
      safetyNote:'Safety note',
      seekTitle:'When to seek help now',
      seek:'If there is immediate danger, severe functional impairment, self-harm thought, violence, harassment, or unsafe work situation, seek urgent support from healthcare, emergency services, occupational health, OSH, HR, or a trusted supervisor.',
      scoreHow:'How scoring works',
      scoreHowText:'Answers are converted to 0-100. The family/friends energy item is reverse scored, following the Copenhagen Burnout Inventory method.',
      printDetails:'Optional Details for Print',
      printDetailsText:'Leave blank if you prefer. These details stay on this device and appear only in your printed or saved copy.',
      fields:['Name','Work role / Unit','Screening date'],
      optional:'Optional',
      qText:'Choose one answer for every question. 1 is very low, 5 is very high.',
      items19:'19 items',
      scale:['To a Very Low Degree','To a Low Degree','Somewhat High','To a High Degree','To a Very High Degree'],
      stressTitle:'Workplace Stressors and Safety',
      stressText:'Select any current issues. These help shape the action plan.',
      impact:'Current functional impact',
      safetyConcern:'Immediate safety concern or self-harm thought?',
      impactOpts:['No major impact','Mild impact','Moderate impact','Severe impact / cannot function safely'],
      safetyOpts:['No','Yes - urgent support needed'],
      outputTitle:'Results and Action Plan',
      outputText:'Step 1 shows your result. Step 2 opens your guided action plan and print options.',
      tabResults:'1. Results',
      tabAction:'2. Action Plan + Print',
      auto:'Automated Result',
      autoText:'Scores are for planning, not diagnosis.',
      calc:'Calculate Now',
      complete:'Answer all 19 questions to generate your result and action plan.',
      overall:'Overall priority',
      mainConcern:'Main concern',
      urgentMsg:'Urgent support is recommended because a safety or severe functional concern was selected.',
      resultMsg:'Your result suggests burnout-related symptoms. This is not a diagnosis.',
      next:'Next:',
      nextText:'open your guided action plan, then print or save your personal copy.',
      viewPlan:'View My Action Plan',
      guided:'Guided Workplace Action Plan',
      guidedText:'Each card gives a quick visual summary. Open details only when needed.',
      printReady:'Print ready',
      planEmpty:'Complete the questionnaire to generate a tailored action plan.',
      detailsMore:'Details / More information',
      otherTitle:'Other Issue / Isu Lain',
      otherText:'Type any other workplace issue not captured above. The tool will add an issue-based action plan from your statement.',
      otherLabel:'Other issue statement / Pernyataan isu lain',
      otherPlaceholder:'Example: I am facing workload, bullying, poor communication, lack of staff, shift fatigue, conflict, resource problems, or emotionally difficult cases.',
      finalNote:'Complete all 19 questions, review your result and action plan, then print or save your personal copy.',
      printBtn:'Print / Save PDF',
      reset:'Reset',
      refs:'References',
      refsText:'References used to structure the explanation, scoring, and action plan.',
      footer:'This tool is an individual support aid. It should complement, not replace, employer psychosocial risk assessment processes, occupational health advice, or professional healthcare assessment.',
      bands:{Low:'Low',Mild:'Mild',Moderate:'Moderate',High:'High',Urgent:'Urgent'},
      domain:{personal:'Personal Burnout',work:'Work-Related Burnout',client:'Client / Patient-Related Burnout'},
      action:{
        'Urgent Safety Step':['Urgent Safety Step','Safety first','If safety is affected, get help before planning work changes.'],
        'Individual Recovery Actions':['Individual Recovery Actions','Recharge','Start with recovery basics before adding more tasks.'],
        'Supervisor and Work Design Actions':['Supervisor and Work Design Actions','Work design','Make work lighter, clearer, and more predictable.'],
        'Client / Patient-Facing Support':['Client / Patient-Facing Support','Client-facing support','Support before and after emotionally demanding interactions.'],
        'Other Issue-Based Action Plan':['Other Issue-Based Action Plan','Work design','Make work lighter, clearer, and more predictable.'],
        'Referral and Follow-Up':['Referral and Follow-Up','Follow-up','One check-in, one support step, and one review date.']
      },
      print:['Individual non-diagnostic report','Created by','Result Summary','Main Stressors','Disclaimer','This tool is for individual screening, workplace health education, and guided action planning. It is not a diagnosis and does not replace professional healthcare assessment.','Follow-up','Other Issue Statement','Use Note','Accessed 25 June 2026']
    },
    bm:{
      title:'Alat Saringan Kelesuan dan Pelan Tindakan Tempat Kerja',
      by:'Dihasilkan oleh Dr Suriya Kumareswaran',
      langA:'English',
      langB:'Bahasa Malaysia',
      nav:['Mula','Apakah CBI?','Penerangan','Soal Selidik','Punca Tekanan','Keputusan','Pelan'],
      mobile:['Mula','Apakah CBI?','Penerangan','Soal Selidik','Punca Tekanan','Keputusan','Pelan Tindakan + Rujukan'],
      progress:'Kemajuan soalan',
      hero:'Saring domain CBI anda, kenal pasti isu kerja yang praktikal, dan sediakan pelan tindakan peribadi yang boleh dicetak atau disimpan.',
      startBtn:'Mula Soal Selidik',
      what:'Apakah CBI?',
      minis:['Soalan','Domain CBI','Cetak / Simpan'],
      cbiTitle:'Apakah Inventori Kelesuan Copenhagen?',
      cbiText:'Inventori Kelesuan Copenhagen (CBI) ialah soal selidik berstruktur untuk menilai kelesuan dalam tiga domain praktikal supaya keputusan membantu perancangan tindakan, bukan sekadar memberi satu skor.',
      cards:[
        ['Kelesuan Peribadi','Kelesuan fizikal dan emosi secara umum, tanpa mengira puncanya.'],
        ['Kelesuan Berkaitan Kerja','Kelesuan yang berkait dengan beban kerja, peranan, kawalan, jadual dan reka bentuk kerja.'],
        ['Kelesuan Berkaitan Klien / Pesakit','Kelesuan yang berkait dengan tugasan berhadapan klien, pesakit atau situasi perkhidmatan yang menuntut emosi.']
      ],
      beforeTitle:'Sebelum Menggunakan Alat Ini',
      beforeText:'Alat individu ini membantu refleksi, perbincangan di tempat kerja dan perancangan tindakan awal. Ia bukan diagnosis perubatan.',
      safetyNote:'Nota keselamatan',
      seekTitle:'Bila perlu mendapatkan bantuan segera',
      seek:'Jika terdapat bahaya segera, gangguan fungsi yang teruk, pemikiran mencederakan diri, keganasan, gangguan atau keadaan kerja yang tidak selamat, dapatkan sokongan segera daripada perkhidmatan kesihatan, kecemasan, kesihatan pekerjaan, OSH/JKKP, HR atau penyelia yang dipercayai.',
      scoreHow:'Cara skor dikira',
      scoreHowText:'Jawapan ditukar kepada skor 0-100. Item tenaga untuk keluarga/rakan diskor secara songsang mengikut kaedah Copenhagen Burnout Inventory.',
      printDetails:'Butiran Pilihan untuk Cetakan',
      printDetailsText:'Boleh dibiarkan kosong. Butiran ini kekal pada peranti ini dan hanya muncul dalam salinan yang dicetak atau disimpan.',
      fields:['Nama','Jawatan / Unit','Tarikh saringan'],
      optional:'Pilihan',
      qText:'Pilih satu jawapan untuk setiap soalan. 1 bermaksud sangat rendah, 5 bermaksud sangat tinggi.',
      items19:'19 item',
      scale:['Tahap sangat rendah','Tahap rendah','Agak tinggi','Tahap tinggi','Tahap sangat tinggi'],
      stressTitle:'Punca Tekanan Kerja dan Keselamatan',
      stressText:'Pilih isu semasa yang berkaitan. Pilihan ini membantu membentuk pelan tindakan.',
      impact:'Kesan semasa terhadap fungsi kerja',
      safetyConcern:'Ada kebimbangan keselamatan segera atau pemikiran mencederakan diri?',
      impactOpts:['Tiada kesan besar','Kesan ringan','Kesan sederhana','Kesan teruk / tidak dapat berfungsi dengan selamat'],
      safetyOpts:['Tidak','Ya - perlukan sokongan segera'],
      outputTitle:'Keputusan dan Pelan Tindakan',
      outputText:'Langkah 1 memaparkan keputusan. Langkah 2 membuka pelan tindakan berpandu dan pilihan cetakan.',
      tabResults:'1. Keputusan',
      tabAction:'2. Pelan Tindakan + Cetak',
      auto:'Keputusan Automatik',
      autoText:'Skor digunakan untuk perancangan, bukan diagnosis.',
      calc:'Kira Sekarang',
      complete:'Jawab semua 19 soalan untuk menjana keputusan dan pelan tindakan.',
      overall:'Keutamaan keseluruhan',
      mainConcern:'Kebimbangan utama',
      urgentMsg:'Sokongan segera disyorkan kerana kebimbangan keselamatan atau gangguan fungsi yang serius telah dipilih.',
      resultMsg:'Keputusan anda menunjukkan gejala berkaitan kelesuan. Ini bukan diagnosis.',
      next:'Seterusnya:',
      nextText:'buka pelan tindakan berpandu, kemudian cetak atau simpan salinan peribadi anda.',
      viewPlan:'Lihat Pelan Tindakan Saya',
      guided:'Pelan Tindakan Tempat Kerja Berpandu',
      guidedText:'Setiap kad memberi ringkasan visual. Buka butiran hanya apabila diperlukan.',
      printReady:'Sedia dicetak',
      planEmpty:'Lengkapkan soal selidik untuk menjana pelan tindakan yang disesuaikan.',
      detailsMore:'Butiran / Maklumat lanjut',
      otherTitle:'Isu Lain',
      otherText:'Taip isu tempat kerja lain yang tidak dinyatakan di atas. Alat ini akan menambah pelan tindakan berdasarkan pernyataan isu anda.',
      otherLabel:'Pernyataan isu lain',
      otherPlaceholder:'Contoh: Saya menghadapi beban kerja tinggi, buli, komunikasi lemah, kekurangan staf, keletihan syif, konflik, masalah sumber atau kes emosi yang mencabar.',
      finalNote:'Lengkapkan semua 19 soalan, semak keputusan dan pelan tindakan, kemudian cetak atau simpan salinan peribadi anda.',
      printBtn:'Cetak / Simpan PDF',
      reset:'Tetapkan Semula',
      refs:'Rujukan',
      refsText:'Rujukan yang digunakan untuk membina penerangan, pemarkahan dan pelan tindakan.',
      footer:'Alat ini ialah bantuan sokongan individu. Ia melengkapi, bukan menggantikan, pentaksiran risiko psikososial majikan, nasihat kesihatan pekerjaan atau penilaian profesional kesihatan.',
      bands:{Low:'Rendah',Mild:'Ringan',Moderate:'Sederhana',High:'Tinggi',Urgent:'Segera'},
      domain:{personal:'Kelesuan Peribadi',work:'Kelesuan Berkaitan Kerja',client:'Kelesuan Berkaitan Klien / Pesakit'},
      action:{
        'Urgent Safety Step':['Langkah Keselamatan Segera','Keselamatan dahulu','Jika keselamatan terjejas, dapatkan bantuan sebelum merancang perubahan kerja.'],
        'Individual Recovery Actions':['Tindakan Pemulihan Individu','Pemulihan diri','Mulakan dengan asas pemulihan sebelum menambah tuntutan baharu.'],
        'Supervisor and Work Design Actions':['Tindakan Penyelia dan Reka Bentuk Kerja','Reka bentuk kerja','Jadikan kerja lebih ringan, jelas dan boleh diramal.'],
        'Client / Patient-Facing Support':['Sokongan Kerja Berhadapan Klien / Pesakit','Sokongan klien/pesakit','Sokongan sebelum dan selepas interaksi yang menuntut emosi.'],
        'Other Issue-Based Action Plan':['Pelan Tindakan Berdasarkan Isu Lain','Reka bentuk kerja','Jadikan kerja lebih ringan, jelas dan boleh diramal.'],
        'Referral and Follow-Up':['Rujukan dan Susulan','Susulan','Satu semakan, satu langkah sokongan dan satu tarikh susulan.']
      },
      print:['Laporan individu bukan diagnostik','Dihasilkan oleh','Ringkasan Keputusan','Punca Tekanan Utama','Penafian','Alat ini adalah untuk saringan individu, pendidikan kesihatan tempat kerja dan perancangan tindakan berpandu. Ia bukan diagnosis dan tidak menggantikan penilaian profesional kesihatan.','Susulan','Pernyataan Isu Lain','Nota Penggunaan','Diakses 25 Jun 2026']
    }
  };
  const qBM={
    personal:['Berapa kerap anda berasa letih?','Berapa kerap anda berasa letih secara fizikal?','Berapa kerap anda berasa letih secara emosi?','Berapa kerap anda berfikir: “Saya sudah tidak sanggup meneruskannya?”','Berapa kerap anda berasa lesu?','Berapa kerap anda berasa lemah dan mudah jatuh sakit?'],
    work:['Adakah kerja anda meletihkan emosi anda?','Adakah anda berasa lesu upaya disebabkan pekerjaan anda?','Adakah pekerjaan anda menyebabkan anda berasa kecewa?','Adakah anda berasa lesu pada akhir hari bekerja?','Adakah anda berasa letih pada waktu pagi apabila memikirkan satu lagi hari bekerja?','Adakah setiap jam bekerja terasa memenatkan bagi anda?','Adakah anda mempunyai tenaga yang mencukupi untuk meluangkan masa bersama keluarga dan rakan ketika waktu lapang?'],
    client:['Adakah anda berasa sukar untuk berurusan dengan klien atau pesakit?','Adakah urusan dengan klien atau pesakit menyebabkan anda berasa kecewa?','Adakah bekerja dengan klien atau pesakit menghabiskan tenaga anda?','Apabila berurusan dengan klien atau pesakit, adakah anda berasa lebih banyak memberi daripada menerima?','Adakah anda berasa penat atau jemu bekerja dengan klien atau pesakit?','Adakah anda kadangkala tertanya-tanya berapa lama lagi anda mampu meneruskan kerja berhadapan klien atau pesakit?']
  };
  const domTitle={personal:['Part 1 - Personal Burnout','Bahagian 1 - Kelesuan Peribadi'],work:['Part 2 - Work-Related Burnout','Bahagian 2 - Kelesuan Berkaitan Kerja'],client:['Part 3 - Client Related Burnout','Bahagian 3 - Kelesuan Berkaitan Klien / Pesakit']};
  const stressBM={'Workload':'Beban kerja','Lack of control':'Kurang kawalan terhadap kerja','Role conflict or unclear role':'Konflik peranan atau peranan tidak jelas','Shift work or overtime':'Kerja syif atau kerja lebih masa','High emotional demand':'Tuntutan emosi yang tinggi','Bullying, harassment, or violence':'Buli, gangguan atau keganasan','Low support':'Sokongan rendah','Resource constraints':'Kekangan sumber','Poor communication':'Komunikasi lemah'};
  const planBM=[
    ['Seek immediate support from a qualified healthcare professional, nearest Emergency Department, Klinik Kesihatan, occupational health service, or local emergency services.','Dapatkan sokongan segera daripada profesional kesihatan, Jabatan Kecemasan terdekat, Klinik Kesihatan, perkhidmatan kesihatan pekerjaan atau perkhidmatan kecemasan setempat.'],
    ['If there is immediate danger, do not wait for workplace review. Prioritise personal safety and urgent care.','Jika terdapat bahaya segera, jangan tunggu semakan tempat kerja. Utamakan keselamatan diri dan rawatan segera.'],
    ['Protect recovery time: plan sleep, rest breaks, hydration, meals, and decompression after demanding work.','Lindungi masa pemulihan: rancang tidur, rehat, hidrasi, makan dan masa bertenang selepas kerja mencabar.'],
    ['Discuss one or two priority stressors with a supervisor, occupational health, OSH, HR, or trusted workplace support person.','Bincangkan satu atau dua punca tekanan utama dengan penyelia, kesihatan pekerjaan, OSH/JKKP, HR atau individu sokongan tempat kerja yang dipercayai.'],
    ['Use peer debriefing after emotionally difficult interactions, cases, or complaints.','Gunakan debrief rakan sekerja selepas interaksi, kes atau aduan yang mencabar emosi.'],
    ['Repeat screening in Immediate.','Ulang saringan dengan segera.'],
    ['This action plan is for support and prevention. It is not medical treatment.','Pelan tindakan ini adalah untuk sokongan dan pencegahan. Ia bukan rawatan perubatan.']
  ];
  const $=id=>document.getElementById(id);
  const text=(sel,v)=>{const e=document.querySelector(sel);if(e)e.textContent=v};
  const html=(sel,v)=>{const e=document.querySelector(sel);if(e)e.innerHTML=v};
  const lang=()=>localStorage.getItem('burnoutLang')||'en';
  const C=()=>dict[lang()];
  function last(el,v){if(el&&el.childNodes.length)el.childNodes[el.childNodes.length-1].nodeValue=v}
  function localizeStatic(){
    const c=C(), bm=lang()==='bm';
    document.documentElement.lang=bm?'ms':'en'; document.title=c.title;
    text('.brand h1',c.title); html('.brand p',`${c.by}<br><a href="mailto:dr.suriya@moh.gov.my">dr.suriya@moh.gov.my</a>`);
    document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang()));
    [...$('mobileNav').options].forEach((o,i)=>o.textContent=c.mobile[i]||o.textContent);
    document.querySelectorAll('.nav a').forEach((a,i)=>last(a,c.nav[i]||a.textContent));
    text('.progress span:first-child',c.progress); text('.eyebrow',bm?'Alat digital individu bukan diagnostik':'Individual non-diagnostic digital tool'); text('.hero h2',c.title); text('.hero h2 + p',c.hero);
    text('.hero-actions .green',c.startBtn); text('.hero-actions .ghost',c.what); document.querySelectorAll('.mini').forEach((m,i)=>last(m,c.minis[i]));
    text('#cbi h2',c.cbiTitle); text('#cbi .muted',c.cbiText); document.querySelectorAll('#cbi .card').forEach((card,i)=>{text(`#cbi .card:nth-child(${i+1}) h3`,c.cards[i][0]);text(`#cbi .card:nth-child(${i+1}) p`,c.cards[i][1])});
    text('#about h2',c.beforeTitle); text('#about .muted',c.beforeText); text('#about .pill',c.safetyNote); const notes=document.querySelectorAll('#about .notice'); if(notes[0])notes[0].innerHTML=`<strong>${c.seekTitle}</strong><br>${c.seek}`; if(notes[1])notes[1].innerHTML=`<strong>${c.scoreHow}</strong><br>${c.scoreHowText}`;
    text('#details h2',c.printDetails); text('#details .muted',c.printDetailsText); document.querySelectorAll('#details .field-label').forEach((l,i)=>l.textContent=c.fields[i]); document.querySelectorAll('#details input[type=text]').forEach(i=>i.placeholder=c.optional);
    text('#screening h2',c.nav[3]); text('#screening .muted',c.qText); text('#screening .pill',c.items19); document.querySelectorAll('.scale span').forEach((sp,i)=>sp.innerHTML=`${c.scale[i]}<br>${['Tahap Sangat Rendah','Tahap Rendah','Kadang Tinggi','Tahap tinggi','Tahap yang Sangat Tinggi'][i]}`);
    text('#stressors h2',c.stressTitle); text('#stressors .muted',c.stressText); const sl=document.querySelectorAll('#stressors .field-label'); if(sl[0])sl[0].textContent=c.impact; if(sl[1])sl[1].textContent=c.safetyConcern; [...$('impairment').options].forEach((o,i)=>o.textContent=c.impactOpts[i]); [...$('selfHarm').options].forEach((o,i)=>o.textContent=c.safetyOpts[i]);
    text('#output>.title h2',c.outputTitle); text('#output>.title .muted',c.outputText); text('#tab-results',c.tabResults); text('#tab-action',c.tabAction); text('#results h2',c.auto); text('#results .muted',c.autoText); text('#calculateBtn',c.calc); text('#completionNotice',c.complete);
    const next=document.querySelector('.next p'); if(next)next.innerHTML=`<strong>${c.next}</strong> ${c.nextText}`; text('#viewPlanBtn',c.viewPlan); text('#plan h2',c.guided); text('#plan .muted',c.guidedText); text('#plan .pill',c.printReady); text('.own h3',c.otherTitle); text('.own p',c.otherText); text('.own .field-label',c.otherLabel); if($('ownActionPlan'))$('ownActionPlan').placeholder=c.otherPlaceholder; text('#action>.notice',c.finalNote); text('#printBtn',c.printBtn); text('#resetBtn',c.reset); text('#references h2',c.refs); text('#references .muted',c.refsText); text('.footer',c.footer);
  }
  function patchQuestionnaire(){
    const bm=lang()==='bm';
    document.querySelectorAll('.domain').forEach((dom,i)=>{
      const ids=['personal','work','client'], id=ids[i]; const h=dom.querySelector('.domain-head h3'); if(h)h.textContent=domTitle[id][bm?1:0];
      const tag=dom.querySelector('.domain-tag'); if(tag)tag.textContent=bm?['Peribadi','Kerja','Klien'][i]:['Personal','Work','Client'][i];
      dom.querySelectorAll('.q').forEach((q,j)=>{const strong=q.querySelector('strong'), sub=q.querySelector('span'); if(bm){if(strong)strong.textContent=qBM[id][j]+'*'; if(sub)sub.textContent='';} else { if(sub)sub.textContent=''; }});
    });
  }
  function patchStressors(){if(lang()!=='bm')return; document.querySelectorAll('#stressorList .check').forEach(l=>{const sp=l.querySelector('span'); if(sp&&stressBM[sp.textContent])sp.textContent=stressBM[sp.textContent]})}
  function patchResults(){
    const c=C(), bm=lang()==='bm';
    const title=$('overallTitle'); if(title)title.childNodes[0].nodeValue=c.overall+': ';
    const txt=$('overallText'); if(txt&&txt.textContent.includes(':')){let domain=txt.textContent.split(':')[1].split('.')[0].trim(); Object.entries(dict.en.domain).forEach(([k,v])=>{if(domain===v)domain=c.domain[k]}); txt.textContent=`${c.mainConcern}: ${domain}. ${txt.textContent.includes('Urgent support')||txt.textContent.includes('Sokongan segera')?c.urgentMsg:c.resultMsg}`;}
    document.querySelectorAll('.score-card h3').forEach(h=>Object.entries(dict.en.domain).forEach(([k,v])=>{if(h.textContent===v)h.textContent=c.domain[k]}));
    document.querySelectorAll('.band').forEach(b=>{Object.entries(dict.en.bands).forEach(([k,v])=>{if(b.textContent===v)b.textContent=c.bands[k]})});
  }
  function patchPlan(){
    const c=C(); if(!document.querySelector('.action'))return;
    document.querySelectorAll('.action').forEach(a=>{const h=a.querySelector('h3'); if(h&&c.action[h.textContent]){const x=c.action[h.textContent]; h.textContent=x[0]; const k=a.querySelector('.kicker'); if(k)k.textContent=x[1]; const p=a.querySelector('.lead'); if(p)p.textContent=x[2];} const sum=a.querySelector('summary'); if(sum)sum.textContent=c.detailsMore;});
    if(lang()==='bm')document.querySelectorAll('.details li').forEach(li=>{for(const [en,bm] of planBM){if(li.textContent===en){li.textContent=bm;break}}});
  }
  function patchPrint(){
    const c=C(); const r=$('printReport'); if(!r)return;
    let h=r.innerHTML; if(lang()==='bm'){
      [['Burnout Screening and Workplace Action Plan Tool',c.title],['Individual non-diagnostic report',c.print[0]],['Created by',c.print[1]],['Result Summary',c.print[2]],['Main Stressors',c.print[3]],['Disclaimer',c.print[4]],['Follow-up',c.print[6]],['Other Issue Statement',c.print[7]],['Use Note',c.print[8]],['Name',c.fields[0]],['Work role',c.fields[1]],['Date',c.fields[2]],['Overall priority',c.overall],['Main concern',c.mainConcern],['Guided Workplace Action Plan',c.guided],['Accessed 25 June 2026',c.print[9]]].forEach(([a,b])=>h=h.replaceAll(a,b));
      Object.entries(dict.en.domain).forEach(([k,v])=>h=h.replaceAll(v,c.domain[k])); Object.entries(dict.en.bands).forEach(([k,v])=>h=h.replaceAll(v,c.bands[k])); planBM.forEach(([a,b])=>h=h.replaceAll(a,b));
    }
    r.innerHTML=h;
  }
  function patchAll(){localizeStatic(); patchQuestionnaire(); patchStressors(); patchResults(); patchPlan(); patchPrint();}
  function setLang(l){
    localStorage.setItem('burnoutLang',l);
    if(typeof window.renderQ==='function')window.renderQ();
    if(typeof window.renderStressors==='function')window.renderStressors();
    if(typeof window.updateResults==='function')window.updateResults();
    patchAll();
  }
  document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
  const oldUpdate=window.updateResults, oldRender=window.renderPlan, oldPrint=window.updatePrint;
  if(typeof oldUpdate==='function')window.updateResults=function(){oldUpdate();patchAll()};
  if(typeof oldRender==='function')window.renderPlan=function(){oldRender();patchPlan();patchPrint()};
  if(typeof oldPrint==='function')window.updatePrint=function(){oldPrint();patchPrint()};
  document.addEventListener('click',e=>{
    if(e.target.closest('#calculateBtn,#viewPlanBtn,#tab-results,#tab-action,[data-tab-link]')) setTimeout(patchAll,0);
  });
  document.addEventListener('change',()=>setTimeout(patchAll,0));
  document.addEventListener('input',()=>setTimeout(patchAll,0));
  patchAll();
})();
