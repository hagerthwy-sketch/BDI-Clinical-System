/* ==========================================================================
   1. مصفوفة بنود قائمة "بيك" للاكتئاب الـ 21 (Beck Depression Inventory - BDI)
   مطابقة للنص العربي المعتمد (ترجمة د. أحمد عبد الخالق) بأوزان من 0 إلى 3
   ========================================================================== */
const bdiItems = [
    {
        id: 1,
        domainAr: "البُعد الوجداني",
        domainEn: "Affective",
        titleAr: "1. المزاج (الحزن)",
        titleEn: "Mood / Sadness",
        options: [
            "إنني لا أشعر بالحزن.",
            "إنني أشعر بالحزن في بعض الأوقات.",
            "أشعر بالحزن طيلة الوقت ولا أستطيع التخلص من هذا الشعور.",
            "إنني أشعر بالحزن والتعاسة لدرجة لا أستطيع احتمالها."
        ]
    },
    {
        id: 2,
        domainAr: "البُعد المعرفي",
        domainEn: "Cognitive",
        titleAr: "2. التشاؤم (النظرة للمستقبل)",
        titleEn: "Pessimism",
        isSensitivePessimism: true,
        options: [
            "إنني لست متشائماً بشأن المستقبل.",
            "أشعر بالتشاؤم بشأن المستقبل.",
            "أشعر أنه لا يوجد لدي ما أطمح للوصول إليه.",
            "أشعر بأن المستقبل لا أمل فيه وأن هذا الوضع من غير الممكن تغييره."
        ]
    },
    {
        id: 3,
        domainAr: "البُعد المعرفي",
        domainEn: "Cognitive",
        titleAr: "3. الشعور بالفشل",
        titleEn: "Sense of Failure",
        options: [
            "لا أشعر بأنني شخص فاشل بشكل عام.",
            "أشعر بأنني أواجه من الفشل أكثر مما يواجهه الإنسان العادي.",
            "عندما أنظر إلى حياتي الماضية، فإن كل ما أراه الكثير من الفشل.",
            "أشعر بأنني إنسان فاشل فشلاً تاماً."
        ]
    },
    {
        id: 4,
        domainAr: "البُعد الوجداني",
        domainEn: "Affective",
        titleAr: "4. عدم الرضا بالنفس وفقدان المتعة",
        titleEn: "Self-Dissatisfaction / Anhedonia",
        options: [
            "ما زالت الأشياء تعطيني شعوراً بالرضا كما كانت عادة.",
            "لا أشعر بمتعة في الأشياء على النحو الذي كنت أشعر به عادة.",
            "لم أعد أشعر بأية متعة حقيقية في أي شيء على الإطلاق.",
            "لدي شعور بعدم الرضا والملل من كل الأشياء."
        ]
    },
    {
        id: 5,
        domainAr: "البُعد المعرفي",
        domainEn: "Cognitive",
        titleAr: "5. الشعور بالذنب",
        titleEn: "Guilt Feelings",
        options: [
            "لا يوجد لدي أي شعور بالذنب.",
            "أشعر بالذنب في بعض الأوقات.",
            "أشعر بالذنب في معظم الأوقات.",
            "أشعر بالذنب في كافة الأوقات."
        ]
    },
    {
        id: 6,
        domainAr: "البُعد المعرفي",
        domainEn: "Cognitive",
        titleAr: "6. توقع العقاب",
        titleEn: "Sense of Punishment",
        options: [
            "لا أشعر بأنني أستحق عقاباً من أي نوع.",
            "أشعر بأنني أستحق العقاب أحياناً.",
            "كثيراً ما أشعر بأنني أستحق العقاب.",
            "أحس بأنني أعاقب وأعذب في حياتي وإنني أستحق ذلك."
        ]
    },
    {
        id: 7,
        domainAr: "البُعد المعرفي",
        domainEn: "Cognitive",
        titleAr: "7. كره الذات وخيبة الأمل",
        titleEn: "Self-Dislike / Hate",
        options: [
            "لا أشعر بخيبة الأمل في نفسي.",
            "أشعر بخيبة الأمل في نفسي.",
            "أشعر أحياناً بأنني أكره نفسي.",
            "إنني أكره نفسي في كل الأوقات."
        ]
    },
    {
        id: 8,
        domainAr: "البُعد المعرفي",
        domainEn: "Cognitive",
        titleAr: "8. اتهام النفس",
        titleEn: "Self-Accusations",
        options: [
            "لا أشعر بأنني أسوأ من الآخرين.",
            "إنني أنتقد نفسي بسبب ما لدي من أخطاء وضعف.",
            "ألوم نفسي طيلة الوقت بسبب أخطائي.",
            "ألوم نفسي على كل شيء يحدث حتى لو لم يكن لي علاقة مباشرة بذلك."
        ]
    },
    {
        id: 9,
        domainAr: "البُعد المعرفي / الخطورة",
        domainEn: "Cognitive / Risk",
        titleAr: "9. الأفكار الانتحارية",
        titleEn: "Suicidal Ideation",
        isCriticalSuicide: true,
        options: [
            "لا يوجد لدي أية أفكار انتحارية.",
            "توجد لدي بعض الأفكار الانتحارية ولكني لن أقوم بتنفيذها.",
            "أرغب في قتل نفسي.",
            "سأقتل نفسي إذا توفرت لي الفرصة السانحة لذلك."
        ]
    },
    {
        id: 10,
        domainAr: "البُعد الوجداني",
        domainEn: "Affective",
        titleAr: "10. البكاء",
        titleEn: "Crying Spells",
        options: [
            "لا أبكي أكثر من المعتاد.",
            "أبكي في هذه الأيام أكثر من المعتاد.",
            "إنني أبكي طيلة الوقت هذه الأيام.",
            "لقد كانت لدي قدرة على البكاء ولكنني في هذه الأيام لا أستطيع البكاء مع أنني أريد ذلك."
        ]
    },
    {
        id: 11,
        domainAr: "البُعد الوجداني",
        domainEn: "Affective",
        titleAr: "11. التهيج وسرعة الاستثارة",
        titleEn: "Irritability",
        options: [
            "لا أشعر في هذه الأيام بأنني سريع الغضب أكثر من المعتاد.",
            "أصبح غضبي يستثار بسهولة أكثر من المعتاد هذه الأيام.",
            "أشعر بسرعة الاستثارة طيلة الوقت في هذه الأيام.",
            "أحس بأن مشاعري قد تبدلت ولم يعد شيء يغضبني."
        ]
    },
    {
        id: 12,
        domainAr: "البُعد الوجداني / الاجتماعي",
        domainEn: "Affective / Social",
        titleAr: "12. الانسحاب الاجتماعي",
        titleEn: "Social Withdrawal",
        options: [
            "لا أشعر بأنني قد فقدت اهتمامي بالناس الآخرين.",
            "أصبحت أقل اهتماماً بالناس الآخرين مما كنت عليه.",
            "فقدت معظم اهتمامي بالناس الآخرين.",
            "فقدت كل اهتمام لي بالناس الآخرين."
        ]
    },
    {
        id: 13,
        domainAr: "البُعد المعرفي",
        domainEn: "Cognitive",
        titleAr: "13. عدم الحسم واتخاذ القرارات",
        titleEn: "Indecisiveness",
        options: [
            "أقوم باتخاذ قراراتي على أفضل ما أستطيع القيام به.",
            "أميل إلى تأجيل اتخاذ القرارات أكثر مما كنت أفعل عادة.",
            "أصبحت أجد صعوبة كبيرة في اتخاذ القرارات عما قبل.",
            "لم تعد لدي أية قدرة على اتخاذ قرارات في هذه الأيام."
        ]
    },
    {
        id: 14,
        domainAr: "البُعد المعرفي",
        domainEn: "Cognitive",
        titleAr: "14. تغير صورة الجسم",
        titleEn: "Body Image Change",
        options: [
            "أشعر بأن مظهري مناسب كما كان عادة.",
            "يزعجني الشعور بأنني كهل أو غير جذاب.",
            "أشعر أن هنالك تغيرات دائمة تطرأ على مظهري تجعلني أبدو غير جذاب.",
            "أعتقد بأنني أبدو قبيحاً."
        ]
    },
    {
        id: 15,
        domainAr: "البُعد البدني والأدائي",
        domainEn: "Somatic",
        titleAr: "15. صعوبات في العمل",
        titleEn: "Work Difficulty",
        options: [
            "أستطيع العمل بنفس الكفاءة كما كنت أفعل عادة.",
            "أحتاج إلى جهد إضافي كي أبدأ العمل في أي شيء.",
            "عليّ أن أحث نفسي بشدة كي أقوم بعمل أي شيء.",
            "لا أستطيع عمل أو إنجاز أي شيء على الإطلاق."
        ]
    },
    {
        id: 16,
        domainAr: "البُعد البدني والجسمي",
        domainEn: "Somatic",
        titleAr: "16. اضطرابات النوم (الأرق)",
        titleEn: "Insomnia / Sleep Disturbance",
        options: [
            "أستطيع النوم جيداً كالمعتاد.",
            "لا أنام جيداً كالمعتاد.",
            "أستيقظ من النوم أبكر بساعة أو ساعتين من المعتاد ولا أستطيع العودة ثانية إلى النوم.",
            "أستيقظ من النوم أبكر بساعات عديدة من المعتاد ولا أستطيع العودة ثانية إلى النوم."
        ]
    },
    {
        id: 17,
        domainAr: "البُعد البدني والجسمي",
        domainEn: "Somatic",
        titleAr: "17. سرعة التعب والإجهاد",
        titleEn: "Fatigability",
        options: [
            "لا أجد أنني أصبحت أكثر تعباً من المعتاد.",
            "أصبحت أتعب أكثر من المعتاد.",
            "أصبحت أتعب من عمل أي شيء تقريباً.",
            "أنا متعب جداً لدرجة لا أستطيع معها عمل أي شيء."
        ]
    },
    {
        id: 18,
        domainAr: "البُعد البدني والجسمي",
        domainEn: "Somatic",
        titleAr: "18. فقدان الشهية",
        titleEn: "Loss of Appetite",
        options: [
            "شهيتي للطعام هي كالمعتاد.",
            "شهيتي للطعام ليست جيدة كما هي عادة.",
            "شهيتي للطعام سيئة جداً هذه الأيام.",
            "ليس لدي شهية للطعام على الإطلاق هذه الأيام."
        ]
    },
    {
        id: 19,
        domainAr: "البُعد البدني والجسمي",
        domainEn: "Somatic",
        titleAr: "19. فقدان الوزن",
        titleEn: "Weight Loss",
        options: [
            "لم أفقد كثيراً من وزني مؤخراً أو بقي وزني كما هو.",
            "فقدت من وزني حوالي 2 كغم.",
            "فقدت من وزني حوالي 4 كغم.",
            "فقدت من وزني أكثر من 6 كغم."
        ]
    },
    {
        id: 20,
        domainAr: "البُعد البدني والجسمي",
        domainEn: "Somatic",
        titleAr: "20. الانشغال بالصحة والجسم",
        titleEn: "Somatic Preoccupation",
        options: [
            "ليس لدي انزعاج يتعلق بصحتي أكثر من المعتاد.",
            "إنني منزعج بشأن المشكلات الصحية مثل ألم المعدة أو الإمساك أو الآلام والأوجاع الجسمية عامة.",
            "إنني متضايق من المشكلات الصحية ومن الصعب أن أفكر في شيء آخر.",
            "إنني قلق للغاية بسبب وضعي الصحي بحيث لا أستطيع التفكير في أي شيء آخر."
        ]
    },
    {
        id: 21,
        domainAr: "البُعد البدني والجسمي",
        domainEn: "Somatic",
        titleAr: "21. فقدان الاهتمامات الجنسية (الليبيدو)",
        titleEn: "Loss of Libido",
        options: [
            "لم ألاحظ أية تغيرات تتعلق في اهتماماتي الجنسية.",
            "أصبحت أقل اهتماماً بالأمور الجنسية مما كنت عليه من قبل.",
            "اهتمامي قليل جداً بالأمور الجنسية في هذه الأيام.",
            "فقدت اهتمامي بالأمور الجنسية تماماً."
        ]
    }
];

/* ==========================================================================
   2. إدارة حالة التطبيق (Application State)
   ========================================================================== */
let currentItemIndex = 0;
let userSelections = Array.from({ length: bdiItems.length }, () => []);
let timerInterval = null;
let elapsedSeconds = 0;
let uploadedPatientPhotoDataUrl = null;

let sessionData = {
    patientName: "",
    examinerName: "غير محدد",
    age: "",
    date: "",
    durationFormatted: "00:00"
};

let calculatedResults = null;

/* ==========================================================================
   3. ربط عناصر واجهة المستخدم (DOM Elements)
   ========================================================================== */
const screens = {
    cover: document.getElementById("coverPage"),
    login: document.getElementById("loginInfoPage"),
    test: document.getElementById("testItemsPage"),
    scoring: document.getElementById("scoringPage"),
    report: document.getElementById("reportPage")
};

// أزرار التنقل بين الشاشات
const goToLoginBtn = document.getElementById("goToLoginBtn");
const backToCoverBtn = document.getElementById("backToCoverBtn");
const patientDataForm = document.getElementById("patientDataForm");
const startAssessmentBtn = document.getElementById("startAssessmentBtn");

// حقول بيانات المفحوص
const patientIdentifierInput = document.getElementById("patientIdentifier");
const examinerNameInput = document.getElementById("examinerName");
const patientAgeInput = document.getElementById("patientAge");
const testDateInput = document.getElementById("testDate");
const patientPhotoInput = document.getElementById("patientPhotoInput");

// عناصر شاشة الاختبار
const activePatientDisplay = document.getElementById("activePatientDisplay");
const questionCounterBadge = document.getElementById("questionCounterBadge");
const testTimerDisplay = document.getElementById("testTimer");
const testProgressBar = document.getElementById("testProgressBar");
const itemCategoryTag = document.getElementById("itemCategoryTag");
const itemSymptomTitle = document.getElementById("itemSymptomTitle");
const itemOptionsGrid = document.getElementById("itemOptionsGrid");
const prevItemBtn = document.getElementById("prevItemBtn");
const nextItemBtn = document.getElementById("nextItemBtn");
const finishTestBtn = document.getElementById("finishTestBtn");

// عناصر شاشة النتائج والتقرير
const generateReportBtn = document.getElementById("generateReportBtn");
const backToScoringBtn = document.getElementById("backToScoringBtn");
const newSessionBtn = document.getElementById("newSessionBtn");

/* ==========================================================================
   4. التهيئة الأولية والتحقق من المدخلات (Initialization & Validation)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().toISOString().split("T")[0];
    testDateInput.value = today;

    [patientIdentifierInput, patientAgeInput, testDateInput].forEach(input => {
        input.addEventListener("input", validateFormInputs);
    });

    // قراءة صورة المفحوص 4x6 عند اختيارها
    if (patientPhotoInput) {
        patientPhotoInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    uploadedPatientPhotoDataUrl = event.target.result;
                };
                reader.readAsDataURL(file);
            } else {
                uploadedPatientPhotoDataUrl = null;
            }
        });
    }
});

function validateFormInputs() {
    const isNameValid = patientIdentifierInput.value.trim().length > 0;
    const ageVal = parseInt(patientAgeInput.value, 10);
    const isAgeValid = !isNaN(ageVal) && ageVal >= 15 && ageVal <= 100;
    const isDateValid = testDateInput.value !== "";

    startAssessmentBtn.disabled = !(isNameValid && isAgeValid && isDateValid);
}

function switchScreen(targetScreen) {
    Object.values(screens).forEach(screen => {
        screen.style.display = "none";
        screen.classList.remove("active-view");
    });
    targetScreen.style.display = "block";
    targetScreen.classList.add("active-view");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ==========================================================================
   5. أحداث التنقل وبدء الجلسة (Navigation & Timer Engine)
   ========================================================================== */
goToLoginBtn.addEventListener("click", () => switchScreen(screens.login));
backToCoverBtn.addEventListener("click", () => switchScreen(screens.cover));

patientDataForm.addEventListener("submit", (e) => {
    e.preventDefault();

    sessionData.patientName = patientIdentifierInput.value.trim();
    sessionData.examinerName = examinerNameInput.value.trim() || "غير محدد / تطبيق ذاتي";
    sessionData.age = patientAgeInput.value;
    sessionData.date = testDateInput.value;

    activePatientDisplay.textContent = sessionData.patientName;

    currentItemIndex = 0;
    userSelections = Array.from({ length: bdiItems.length }, () => []);
    startSessionTimer();
    renderCurrentItem();
    switchScreen(screens.test);
});

function startSessionTimer() {
    clearInterval(timerInterval);
    elapsedSeconds = 0;
    updateTimerUI();

    timerInterval = setInterval(() => {
        elapsedSeconds++;
        updateTimerUI();
    }, 1000);
}

function updateTimerUI() {
    const mins = String(Math.floor(elapsedSeconds / 60)).padStart(2, "0");
    const secs = String(elapsedSeconds % 60).padStart(2, "0");
    sessionData.durationFormatted = `${mins}:${secs}`;
    testTimerDisplay.textContent = `الوقت: ${sessionData.durationFormatted}`;
}

/* ==========================================================================
   6. عرض البنود التفاعلية وإدارة الاستجابات (Interactive Items Engine)
   ========================================================================== */
function renderCurrentItem() {
    const item = bdiItems[currentItemIndex];
    const totalItems = bdiItems.length;
    const selectedScores = userSelections[currentItemIndex];

    questionCounterBadge.textContent = `البند ${currentItemIndex + 1} من ${totalItems}`;
    const progressPercent = ((currentItemIndex + 1) / totalItems) * 100;
    testProgressBar.style.width = `${progressPercent}%`;

    itemCategoryTag.textContent = `${item.domainAr} (${item.domainEn})`;
    itemSymptomTitle.textContent = item.titleAr;

    itemOptionsGrid.innerHTML = "";
    item.options.forEach((optionText, scoreValue) => {
        const optionCard = document.createElement("button");
        optionCard.type = "button";
        optionCard.className = "bdi-option-card";
        if (selectedScores.includes(scoreValue)) {
            optionCard.classList.add("selected");
        }

        optionCard.innerHTML = `
            <span class="option-indicator"></span>
            <span class="option-text">${optionText}</span>
        `;

        optionCard.addEventListener("click", () => toggleOptionSelection(scoreValue));
        itemOptionsGrid.appendChild(optionCard);
    });

    updateNavigationButtons();
}

function toggleOptionSelection(scoreValue) {
    let currentSelected = userSelections[currentItemIndex];

    if (currentSelected.includes(scoreValue)) {
        currentSelected = currentSelected.filter(val => val !== scoreValue);
    } else {
        if (currentSelected.length >= 2) {
            currentSelected.shift();
        }
        currentSelected.push(scoreValue);
    }

    userSelections[currentItemIndex] = currentSelected;

    const cards = itemOptionsGrid.querySelectorAll(".bdi-option-card");
    cards.forEach((card, idx) => {
        card.classList.toggle("selected", currentSelected.includes(idx));
    });

    updateNavigationButtons();
}

function getFinalItemScore(itemIndex) {
    const selections = userSelections[itemIndex];
    if (!selections || selections.length === 0) return 0;
    return Math.max(...selections);
}

function updateNavigationButtons() {
    const isAnswered = userSelections[currentItemIndex].length > 0;
    const isLastItem = currentItemIndex === bdiItems.length - 1;

    prevItemBtn.disabled = currentItemIndex === 0;

    if (isLastItem) {
        nextItemBtn.style.display = "none";
        finishTestBtn.style.display = "inline-flex";
        finishTestBtn.disabled = !isAnswered;
    } else {
        nextItemBtn.style.display = "inline-flex";
        finishTestBtn.style.display = "none";
        nextItemBtn.disabled = !isAnswered;
    }
}

prevItemBtn.addEventListener("click", () => {
    if (currentItemIndex > 0) {
        currentItemIndex--;
        renderCurrentItem();
    }
});

nextItemBtn.addEventListener("click", () => {
    if (currentItemIndex < bdiItems.length - 1 && userSelections[currentItemIndex].length > 0) {
        currentItemIndex++;
        renderCurrentItem();
    }
});

/* ==========================================================================
   7. محرك الحسابات، التصنيف الإكلينيكي، ونظام الإنذار المبكر (Clinical Engine)
   ========================================================================== */
finishTestBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    processClinicalResults();
    switchScreen(screens.scoring);
});

function processClinicalResults() {
    // 1. استخراج الدرجات النهائية لكل بند (بأخذ التقدير الأعلى في حال تحديد عبارتين)
    const finalScores = bdiItems.map((_, idx) => getFinalItemScore(idx));
    const totalRawScore = finalScores.reduce((sum, val) => sum + val, 0);

    // 2. تصنيف شدة الاكتئاب بناءً على المعايير المعتمدة
    let classificationAr = "";
    let classificationEn = "";
    let rangeNote = "";
    let interpretationAr = "";
    let interpretationEn = "";

    if (totalRawScore <= 9) {
        classificationAr = "داخل المدى الأقل (في حده الأدنى)";
        classificationEn = "Minimal Depression (Normal Range)";
        rangeNote = "المدى المعياري: من 0 إلى 9 درجات";
        interpretationAr = "تشير الدرجة الكلية للمفحوص إلى وجود أعراض اكتئابية في حدها الأدنى الطبيعي، ولا توجد مؤشرات إكلينيكية دالة على اضطراب اكتئابي حالي.";
        interpretationEn = "The total score falls within the minimal range, indicating normal mood fluctuations with no clinically significant depressive symptomatology.";
    } else if (totalRawScore <= 16) {
        classificationAr = "اكتئاب معتدل";
        classificationEn = "Mild Depression";
        rangeNote = "المدى المعياري: من 10 إلى 16 درجة";
        interpretationAr = "تشير الدرجة الكلية إلى وجود أعراض اكتئاب معتدلة تستدعي المتابعة الإرشادية والدعم النفسي الوقائي لمنع تفاقم الأعراض.";
        interpretationEn = "The total score indicates mild depressive symptoms, warranting supportive counseling and clinical monitoring.";
    } else if (totalRawScore <= 29) {
        classificationAr = "اكتئاب متوسط";
        classificationEn = "Moderate Depression";
        rangeNote = "المدى المعياري: من 17 إلى 29 درجة";
        interpretationAr = "تشير الدرجة الكلية إلى وجود اكتئاب متوسط الشدة يؤثر بصورة ملحوظة على الجوانب الوجدانية والمعرفية والجسدية، ويوصى بتدخل علاجي نفسي متخصص.";
        interpretationEn = "The total score reflects moderate depression with noticeable cognitive, affective, and somatic impact; structured psychotherapeutic intervention is recommended.";
    } else {
        classificationAr = "اكتئاب شديد";
        classificationEn = "Severe Depression";
        rangeNote = "المدى المعياري: من 30 إلى 63 درجة";
        interpretationAr = "تشير الدرجة الكلية إلى مستوى مرتفع جداً من الاكتئاب الشديد، مما يتطلب تقييماً عيادياً فورياً وخطة تدخل علاجي مكثفة.";
        interpretationEn = "The total score indicates severe depression, requiring immediate comprehensive psychiatric/clinical evaluation and intensive therapeutic care.";
    }

    // 3. تحليل النمط العام للأعراض (المعرفية، الوجدانية، والبدنية)
    let affectiveSum = 0, cognitiveSum = 0, somaticSum = 0;
    const strengthsAr = [], strengthsEn = [];
    const supportAr = [], supportEn = [];

    bdiItems.forEach((item, idx) => {
        const score = finalScores[idx];
        if (item.domainEn.includes("Affective")) affectiveSum += score;
        if (item.domainEn.includes("Cognitive")) cognitiveSum += score;
        if (item.domainEn.includes("Somatic")) somaticSum += score;

        if (score === 0) {
            strengthsAr.push(`${item.titleAr} (استقرار تام)`);
            strengthsEn.push(`${item.titleEn} (Stable)`);
        }
        if (score >= 2) {
            supportAr.push(`${item.titleAr} — شدة مرتفعة (${score}/3)`);
            supportEn.push(`${item.titleEn} — Elevated (${score}/3)`);
        }
    });

    // 4. فحص قواعد الأمان والإنذار المبكر (Clinical Alerts)
    const alertsAr = [];
    const alertsEn = [];

    const suicideScore = finalScores[8];
    if (suicideScore >= 1) {
        alertsAr.push(`تنبيه خطورة قصوى (البند 9 - الأفكار الانتحارية): سجل المفحوص تقدير (${suicideScore}/3) "${bdiItems[8].options[suicideScore]}". يجب فحص احتمال الخطورة الذاتية فوراً.`);
        alertsEn.push(`CRITICAL RISK ALERT (Item 9 - Suicidal Ideation): Score (${suicideScore}/3). Immediate self-harm risk evaluation required.`);
    }

    const pessimismScore = finalScores[1];
    if (pessimismScore >= 2) {
        alertsAr.push(`تنبيه إكلينيكي هام (البند 2 - التشاؤم): سجل المفحوص تقدير (${pessimismScore}/3)، وهو منبئ هام بالخطر الانتحاري يستوجب المتابعة الدقيقة.`);
        alertsEn.push(`CLINICAL WARNING (Item 2 - Pessimism): Elevated score (${pessimismScore}/3); strong predictor of suicidal risk.`);
    }

    const allIdentical = finalScores.every(val => val === finalScores[0]);
    if (allIdentical) {
        alertsAr.push(`ملاحظة صدق التطبيق: تطابق التقدير (${finalScores[0]}) في جميع البنود الـ 21، ويُوصى بمراجعة المفحوص.`);
        alertsEn.push(`VALIDITY NOTE: Identical rating (${finalScores[0]}) across all 21 items; review advised.`);
    }

    // تحديث واجهة صفحة المعالجة (Scoring Page)
    document.getElementById("rawScoreValue").textContent = totalRawScore;
    document.getElementById("severityClassification").textContent = classificationAr;
    document.getElementById("severityRangeNote").textContent = rangeNote;

    const alertsContainer = document.getElementById("clinicalAlertsContainer");
    const scoringAlertsList = document.getElementById("scoringAlertsList");
    scoringAlertsList.innerHTML = "";

    if (alertsAr.length > 0) {
        alertsContainer.style.display = "block";
        alertsAr.forEach(msg => {
            const li = document.createElement("li");
            li.textContent = msg;
            scoringAlertsList.appendChild(li);
        });
    } else {
        alertsContainer.style.display = "none";
    }

    calculatedResults = {
        finalScores,
        totalRawScore,
        classificationAr,
        classificationEn,
        interpretationAr,
        interpretationEn,
        affectiveSum,
        cognitiveSum,
        somaticSum,
        strengthsAr,
        strengthsEn,
        supportAr,
        supportEn,
        alertsAr,
        alertsEn
    };
}

/* ==========================================================================
   8. بناء التقرير الطبي الرسمي المضغوط في صفحة A4 واحدة (Medical Certificate)
   ========================================================================== */
generateReportBtn.addEventListener("click", () => {
    if (!calculatedResults) return;
    populateBilingualReport();
    switchScreen(screens.report);
});

backToScoringBtn.addEventListener("click", () => switchScreen(screens.scoring));

newSessionBtn.addEventListener("click", () => {
    patientDataForm.reset();
    uploadedPatientPhotoDataUrl = null;
    const today = new Date().toISOString().split("T")[0];
    testDateInput.value = today;
    startAssessmentBtn.disabled = true;
    switchScreen(screens.cover);
});

function populateBilingualReport() {
    const r = calculatedResults;

    // 1. رقم مرجعي للجلسة وتاريخ الإصدار
    const randomRef = "BDI-" + Math.floor(1000 + Math.random() * 9000);
    document.getElementById("repSessionId").textContent = randomRef;
    document.getElementById("repPrintStamp").textContent = new Date().toLocaleDateString("ar-EG");

    // 2. عرض صورة المفحوص 4x6 إن وُجدت أو إظهار الإطار الطبي الافتراضي
    const photoImg = document.getElementById("repPatientPhotoImg");
    const photoPlaceholder = document.getElementById("photoPlaceholderText");
    if (uploadedPatientPhotoDataUrl) {
        photoImg.src = uploadedPatientPhotoDataUrl;
        photoImg.style.display = "block";
        photoPlaceholder.style.display = "none";
    } else {
        photoImg.style.display = "none";
        photoPlaceholder.style.display = "flex";
    }

    // 3. بيانات المفحوص والفاحص
    document.getElementById("repPatientName").textContent = sessionData.patientName;
    document.getElementById("repPatientAge").textContent = `${sessionData.age} سنة`;
    document.getElementById("repTestDate").textContent = sessionData.date;
    document.getElementById("repExaminerName").textContent = sessionData.examinerName;
    document.getElementById("repDuration").textContent = sessionData.durationFormatted;
    document.getElementById("tableExaminerName").textContent = sessionData.examinerName;

    // 4. ملخص الدرجات والأبعاد السيكومترية في الجدول
    document.getElementById("repRawScore").textContent = r.totalRawScore;
    document.getElementById("repSeverityClass").textContent = `${r.classificationAr} (${r.classificationEn})`;
    document.getElementById("repCogScore").textContent = `${r.cognitiveSum} / 27`;
    document.getElementById("repAffScore").textContent = `${r.affectiveSum} / 15`;
    document.getElementById("repSomScore").textContent = `${r.somaticSum} / 21`;

    // 5. الأعراض البارزة (بحد أقصى 5 نقاط مركزة للحفاظ على مقاس صفحة A4 واحدة)
    const arSupportList = document.getElementById("arSupportAreasList");
    arSupportList.innerHTML = "";
    if (r.supportAr.length > 0) {
        r.supportAr.slice(0, 5).forEach(txt => {
            const li = document.createElement("li");
            li.textContent = txt;
            arSupportList.appendChild(li);
        });
    } else {
        arSupportList.innerHTML = "<li>لا توجد أعراض مرتفعة الشدة (درجة 2 أو 3) مسجلة.</li>";
    }

    // 6. نقاط القوة والاستقرار النفسي (بحد أقصى 5 نقاط مركزة)
    const arStrengthsList = document.getElementById("arStrengthsList");
    arStrengthsList.innerHTML = "";
    if (r.strengthsAr.length > 0) {
        r.strengthsAr.slice(0, 5).forEach(txt => {
            const li = document.createElement("li");
            li.textContent = txt;
            arStrengthsList.appendChild(li);
        });
    } else {
        arStrengthsList.innerHTML = "<li>يُوصى بخطة دعم نفسي شاملة لجميع الأبعاد.</li>";
    }

    // 7. الرأي الإكلينيكي ثنائي اللغة (عربي / إنجليزي)
    document.getElementById("arClinicalInterpretation").textContent = r.interpretationAr;
    document.getElementById("enClinicalInterpretation").textContent = r.interpretationEn;

    // 8. تنبيهات الأمان الحرجة (البند 2 و 9 وتطابق الإجابات)
    const arSafetyBox = document.getElementById("arSafetyBox");
    const enSafetyBox = document.getElementById("enSafetyBox");
    const arSafetyText = document.getElementById("arSafetyText");
    const enSafetyText = document.getElementById("enSafetyText");

    if (r.alertsAr.length > 0) {
        arSafetyBox.classList.add("has-alert");
        enSafetyBox.classList.add("has-alert");
        arSafetyText.textContent = r.alertsAr.join(" | ");
        enSafetyText.textContent = r.alertsEn.join(" | ");
    } else {
        arSafetyBox.classList.remove("has-alert");
        enSafetyBox.classList.remove("has-alert");
        arSafetyText.textContent = "لا توجد مؤشرات خطورة حرجة مسجلة (البند 2 و 9).";
        enSafetyText.textContent = "No critical safety flags recorded (Items 2 & 9).";
    }
}