export interface Remedy {
  _id: string;
  id: string;
  name: {
    en: string;
    ta: string;
  };
  symptoms: {
    en: string[];
    ta: string[];
  };
  ingredients: {
    en: string[];
    ta: string[];
  };
  preparation: {
    en: string;
    ta: string;
  };
  dosage: {
    en: string;
    ta: string;
  };
  safetyTips: {
    en: string[];
    ta: string[];
  };
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  prepTime: number; // in minutes
  submittedBy?: string;
  status: 'approved' | 'pending' | 'rejected';
}

export const remedies: Remedy[] = [
    {
      id: '1',
      name: { en: 'Turmeric Milk for Cold', ta: 'சளிக்கு மஞ்சள் பால்' },
      symptoms: {
        en: ['Common Cold', 'Cough', 'Sore Throat', 'Low Immunity'],
        ta: ['சாதாரண சளி', 'இருமல்', 'தொண்டை வலி', 'குறைந்த நோய் எதிர்ப்பு சக்தி'],
      },
      ingredients: {
        en: ['1 cup milk', '1/2 tsp turmeric powder', '1/4 tsp black pepper', '1 tsp honey', 'Pinch of ginger powder'],
        ta: ['1 கப் பால்', '1/2 டீஸ்பூன் மஞ்சள் தூள்', '1/4 டீஸ்பூன் கருப்பு மிளகு', '1 டீஸ்பூன் தேன்', 'சிறிது இஞ்சி தூள்'],
      },
      preparation: {
        en: 'Heat milk, add turmeric, pepper, and ginger. Simmer gently. Remove and mix honey before drinking.',
        ta: 'பாலை சூடாக்கி மஞ்சள், மிளகு, இஞ்சி சேர்த்து கொதிக்க விடவும். பின் இறக்கி தேன் சேர்க்கவும்.',
      },
      dosage: { en: 'Once daily before bed for 3–5 days', ta: 'தினமும் இரவு 3–5 நாட்கள்' },
      safetyTips: {
        en: ['Not for kids <1 year', 'Consult doctor if symptoms persist', 'Rinse mouth after drinking'],
        ta: ['1 வயதுக்கு குறைவான குழந்தைகளுக்கு தர வேண்டாம்', 'அறிகுறிகள் நீடித்தால் மருத்துவரை அணுகவும்', 'குடித்த பின் வாய் கொப்பளிக்கவும்'],
      },
      category: 'respiratory',
      difficulty: 'easy',
      prepTime: 10,
      status: 'approved',
      _id: ""
    },
  {
    id: '2',
    name: { en: 'Neem Leaf Paste for Skin Issues', ta: 'தோல் பிரச்சனைகளுக்கு வேப்பிலை பேஸ்ட்' },
    symptoms: {
      en: ['Acne', 'Eczema', 'Skin Irritation', 'Minor Cuts'],
      ta: ['முகப்பரு', 'அரிக்கும் தோல் வியாதி', 'தோல் எரிச்சல்', 'சிறிய காயங்கள்'],
    },
    ingredients: {
      en: ['10–15 neem leaves', '1 tbsp rose water', '1/2 tsp turmeric', '1 tsp coconut oil'],
      ta: ['10–15 புதிய வேப்பிலைகள்', '1 டேபிள்ஸ்பூன் ரோஸ் வாட்டர்', '1/2 டீஸ்பூன் மஞ்சள்', '1 டீஸ்பூன் தேங்காய் எண்ணெய்'],
    },
    preparation: {
      en: 'Grind neem leaves with rose water, add turmeric & coconut oil, make paste.',
      ta: 'வேப்பிலையை ரோஸ் வாட்டருடன் அரைத்து மஞ்சள், எண்ணெய் சேர்க்கவும்.',
    },
    dosage: { en: 'Apply on affected area 15–20 mins, 2–3 times weekly', ta: '15–20 நிமிடங்கள் வைத்து வாரத்தில் 2–3 முறை' },
    safetyTips: {
      en: ['Test on small area', 'Avoid eyes', 'Stop if irritation occurs'],
      ta: ['சிறிய பகுதியில் சோதிக்கவும்', 'கண்களில் படக்கூடாது', 'எரிச்சல் ஏற்பட்டால் நிறுத்தவும்'],
    },
    category: 'skin',
    difficulty: 'medium',
    prepTime: 15,
    status: 'approved',
    _id: ""
  },
  {
    id: '3',
    name: { en: 'Ginger Honey Tea for Digestion', ta: 'செரிமானத்திற்கு இஞ்சி தேன் டீ' },
    symptoms: {
      en: ['Indigestion', 'Nausea', 'Bloating'],
      ta: ['அஜீரணம்', 'குமட்டல்', 'வயிறு உப்புசம்'],
    },
    ingredients: {
      en: ['1-inch ginger', '1 cup water', '1 tbsp honey', '1/2 lemon juice'],
      ta: ['1 இன்ச் இஞ்சி', '1 கப் தண்ணீர்', '1 டேபிள்ஸ்பூன் தேன்', '1/2 எலுமிச்சை சாறு'],
    },
    preparation: {
      en: 'Boil ginger in water 5–7 mins, strain, add honey & lemon.',
      ta: 'இஞ்சியை தண்ணீரில் கொதிக்கவைத்து வடிகட்டி தேன், எலுமிச்சை சேர்க்கவும்.',
    },
    dosage: { en: '1 cup before meals, 2–3 times daily', ta: 'உணவுக்கு முன் தினமும் 2–3 முறை' },
    safetyTips: {
      en: ['Avoid if gallstones', 'Consult doctor if pregnant'],
      ta: ['பித்தக்கற்கள் இருந்தால் தவிர்க்கவும்', 'கர்ப்பிணிகள் மருத்துவரிடம் ஆலோசிக்கவும்'],
    },
    category: 'digestive',
    difficulty: 'easy',
    prepTime: 12,
    status: 'approved',
    _id: ""
  },
  {
    id: '4',
    name: { en: 'Tulsi Kashayam for Fever', ta: 'காய்ச்சலுக்கு துளசி கஷாயம்' },
    symptoms: { en: ['Fever', 'Headache', 'Weakness'], ta: ['காய்ச்சல்', 'தலைவலி', 'பலவீனம்'] },
    ingredients: {
      en: ['20 tulsi leaves', '1 cup water', '1/2 tsp pepper', '1 tsp jaggery'],
      ta: ['20 துளசி இலைகள்', '1 கப் தண்ணீர்', '1/2 டீஸ்பூன் மிளகு', '1 டீஸ்பூன் வெல்லம்'],
    },
    preparation: {
      en: 'Boil tulsi with pepper, reduce water to half, strain, add jaggery.',
      ta: 'துளசி, மிளகு சேர்த்து கொதிக்கவைத்து பாதியாக குறைக்கவும், பின் வெல்லம் சேர்க்கவும்.',
    },
    dosage: { en: '2–3 times daily until fever subsides', ta: 'காய்ச்சல் குறையும் வரை தினமும் 2–3 முறை' },
    safetyTips: {
      en: ['Use fresh tulsi', 'Not for kids under 2 years'],
      ta: ['புதிய துளசி மட்டும் பயன்படுத்தவும்', '2 வயதுக்கு குறைவான குழந்தைகளுக்கு தர வேண்டாம்'],
    },
    category: 'general',
    difficulty: 'medium',
    prepTime: 20,
    status: 'approved',
    _id: ""
  },
  {
    id: '5',
    name: { en: 'Aloe Vera Gel for Burns', ta: 'தீக்காயத்திற்கு கற்றாழை ஜெல்' },
    symptoms: { en: ['Minor Burns', 'Sunburn'], ta: ['சிறிய தீக்காயம்', 'சூரிய காயம்'] },
    ingredients: { en: ['1 aloe vera leaf'], ta: ['1 கற்றாழை இலை'] },
    preparation: { en: 'Scoop gel, apply directly.', ta: 'ஜெல்லை எடுத்து நேரடியாக தடவவும்.' },
    dosage: { en: '3–4 times daily until healed', ta: 'குணமாகும் வரை தினமும் 3–4 முறை' },
    safetyTips: {
      en: ['Use clear inner gel', 'Avoid yellow latex'],
      ta: ['உள் ஜெல்லை மட்டும் பயன்படுத்தவும்', 'மஞ்சள் பாகத்தை தவிர்க்கவும்'],
    },
    category: 'skin',
    difficulty: 'easy',
    prepTime: 5,
    status: 'approved',
    _id: ""
  },
  {
    id: '6',
    name: { en: 'Curry Leaves Oil for Hair Growth', ta: 'முடி வளர்ச்சிக்கு கருவேப்பிலை எண்ணெய்' },
    symptoms: { en: ['Hair Fall', 'Dandruff'], ta: ['முடி உதிர்தல்', 'பொடுகு'] },
    ingredients: {
      en: ['1 cup coconut oil', 'Handful curry leaves'],
      ta: ['1 கப் தேங்காய் எண்ணெய்', 'ஒரு கைப்பிடி கருவேப்பிலை'],
    },
    preparation: { en: 'Heat oil, add curry leaves until crisp. Cool & store.', ta: 'எண்ணெயில் கருவேப்பிலை வறுத்து சேமிக்கவும்.' },
    dosage: { en: 'Massage scalp twice weekly', ta: 'வாரத்தில் 2 முறை தடவவும்' },
    safetyTips: {
      en: ['Test before use', 'Avoid eyes'],
      ta: ['முதலில் சோதிக்கவும்', 'கண்களில் படக்கூடாது'],
    },
    category: 'hair',
    difficulty: 'easy',
    prepTime: 15,
    status: 'approved',
    _id: ""
  },
  {
    id: '7',
    name: { en: 'Fenugreek Water for Diabetes', ta: 'சர்க்கரை நோய்க்கு வெந்தய நீர்' },
    symptoms: { en: ['High Blood Sugar'], ta: ['உயர் சர்க்கரை'] },
    ingredients: { en: ['1 tbsp fenugreek seeds', '1 glass water'], ta: ['1 டேபிள்ஸ்பூன் வெந்தயம்', '1 கண்ணாடி தண்ணீர்'] },
    preparation: { en: 'Soak seeds overnight, drink water in morning.', ta: 'வெந்தயத்தை இரவு ஊறவைத்து காலையில் குடிக்கவும்.' },
    dosage: { en: 'Daily morning on empty stomach', ta: 'தினமும் காலையில்' },
    safetyTips: {
      en: ['Monitor sugar levels', 'Consult doctor before regular use'],
      ta: ['சர்க்கரை அளவை கண்காணிக்கவும்', 'மருத்துவரிடம் ஆலோசிக்கவும்'],
    },
    category: 'general',
    difficulty: 'easy',
    prepTime: 5,
    status: 'approved',
    _id: ""
  },
  {
    id: '8',
    name: { en: 'Garlic for Cholesterol', ta: 'கொலஸ்ட்ரால் குறைக்க பூண்டு' },
    symptoms: { en: ['High Cholesterol'], ta: ['உயர் கொலஸ்ட்ரால்'] },
    ingredients: { en: ['2 raw garlic cloves'], ta: ['2 பூண்டு பற்கள்'] },
    preparation: { en: 'Peel and chew raw cloves.', ta: 'பூண்டை தோல் நீக்கி மென்று சாப்பிடவும்.' },
    dosage: { en: 'Once daily morning', ta: 'தினமும் காலை' },
    safetyTips: {
      en: ['May cause bad breath', 'Avoid excess'],
      ta: ['வாசனை ஏற்படும்', 'அதிகம் சாப்பிட வேண்டாம்'],
    },
    category: 'general',
    difficulty: 'easy',
    prepTime: 2,
    status: 'approved',
    _id: ""
  },
  {
    id: '9',
    name: { en: 'Peppermint Tea for Stress', ta: 'மனஅழுத்தத்துக்கு புதினா டீ' },
    symptoms: { en: ['Stress', 'Headache'], ta: ['மன அழுத்தம்', 'தலைவலி'] },
    ingredients: { en: ['Handful mint leaves', '1 cup water'], ta: ['சில புதினா இலைகள்', '1 கப் தண்ணீர்'] },
    preparation: { en: 'Boil mint in water, strain, serve warm.', ta: 'புதினாவை தண்ணீரில் கொதிக்கவைத்து குடிக்கவும்.' },
    dosage: { en: '1–2 cups daily', ta: 'தினமும் 1–2 கப்' },
    safetyTips: {
      en: ['Avoid if acid reflux', 'Consult if pregnant'],
      ta: ['அமிலம் அதிகமாக இருந்தால் தவிர்க்கவும்', 'கர்ப்பிணிகள் மருத்துவரிடம் கேட்கவும்'],
    },
    category: 'stress',
    difficulty: 'easy',
    prepTime: 8,
    status: 'approved',
    _id: ""
  },
  {
    id: '10',
    name: { en: 'Triphala Powder for Constipation', ta: 'மலச்சிக்கலுக்கு திரிபலா தூள்' },
    symptoms: { en: ['Constipation'], ta: ['மலச்சிக்கல்'] },
    ingredients: { en: ['1 tsp triphala powder', '1 glass warm water'], ta: ['1 டீஸ்பூன் திரிபலா தூள்', '1 கண்ணாடி வெந்நீர்'] },
    preparation: { en: 'Mix powder in warm water and drink at night.', ta: 'திரிபலா தூளை வெந்நீரில் கலந்து இரவில் குடிக்கவும்.' },
    dosage: { en: 'Once daily at bedtime', ta: 'தினமும் இரவு' },
    safetyTips: {
      en: ['Avoid excess use', 'Not for children under 12'],
      ta: ['அதிகம் எடுத்துக்கொள்ள வேண்டாம்', '12 வயதுக்கு குறைவான குழந்தைகளுக்கு தர வேண்டாம்'],
    },
    category: 'digestive',
    difficulty: 'easy',
    prepTime: 3,
    status: 'approved',
    _id: ""
  },
  {
    id: '11',
    name: { en: 'Cumin Water for Acidity', ta: 'அமிலத்துக்கு சீரக நீர்' },
    symptoms: { en: ['Acidity', 'Heartburn'], ta: ['அமிலம்', 'மார்புக் குமட்டல்'] },
    ingredients: { en: ['1 tsp cumin seeds', '1 glass water'], ta: ['1 டீஸ்பூன் சீரகம்', '1 கண்ணாடி தண்ணீர்'] },
    preparation: { en: 'Boil cumin seeds in water for 5 mins, cool, strain.', ta: 'சீரகத்தை தண்ணீரில் கொதிக்கவைத்து வடிகட்டி குடிக்கவும்.' },
    dosage: { en: '1 glass after meals', ta: 'உணவுக்குப் பிறகு 1 கப்' },
    safetyTips: { en: ['Avoid excess use'], ta: ['அதிகம் பயன்படுத்த வேண்டாம்'] },
    category: 'digestive',
    difficulty: 'easy',
    prepTime: 7,
    status: 'approved',
    _id: ""
  },
  {
    id: '12',
    name: { en: 'Sesame Oil Pulling for Oral Health', ta: 'வாய்நீர் நலனுக்கு எள் எண்ணெய் குளுக்கல்' },
    symptoms: { en: ['Bad Breath', 'Gum Issues'], ta: ['வாசனை', 'பற்சிசை பிரச்சனை'] },
    ingredients: { en: ['1 tbsp sesame oil'], ta: ['1 டேபிள்ஸ்பூன் எள் எண்ணெய்'] },
    preparation: { en: 'Swish oil in mouth for 10–15 mins, then spit out.', ta: 'எண்ணெயை வாயில் 10–15 நிமிடம் குளுக்கி பின் உமிழவும்.' },
    dosage: { en: 'Daily morning before brushing', ta: 'தினமும் காலை பல் தேய்க்கும் முன்' },
    safetyTips: { en: ['Do not swallow oil'], ta: ['எண்ணெயை விழுங்க வேண்டாம்'] },
    category: 'oral',
    difficulty: 'easy',
    prepTime: 1,
    status: 'approved',
    _id: ""
  },
  {
    id: '13',
    name: { en: 'Hibiscus Tea for Hair & Skin', ta: 'முடி மற்றும் தோலுக்கு செம்பருத்தி டீ' },
    symptoms: { en: ['Hair Fall', 'Skin Glow'], ta: ['முடி உதிர்தல்', 'தோல் பளபளப்பு'] },
    ingredients: { en: ['2 hibiscus flowers', '1 cup water', '1 tsp honey'], ta: ['2 செம்பருத்தி பூ', '1 கப் தண்ணீர்', '1 டீஸ்பூன் தேன்'] },
    preparation: { en: 'Boil flowers in water, strain, add honey.', ta: 'பூவை தண்ணீரில் கொதிக்கவைத்து வடிகட்டி தேன் சேர்க்கவும்.' },
    dosage: { en: 'Drink 2–3 times weekly', ta: 'வாரத்தில் 2–3 முறை' },
    safetyTips: { en: ['Avoid during pregnancy'], ta: ['கர்ப்பமாக இருக்கும் போது தவிர்க்கவும்'] },
    category: 'hair',
    difficulty: 'easy',
    prepTime: 10,
    status: 'approved',
    _id: ""
  },
  {
    id: '14',
    name: { en: 'Coriander Seed Water for UTI', ta: 'மூத்திரக் காய்ச்சலுக்கு கொத்தமல்லி விதை நீர்' },
    symptoms: { en: ['UTI', 'Burning Urination'], ta: ['மூத்திர பாதை தொற்று', 'சுடும் உணர்வு'] },
    ingredients: { en: ['1 tbsp coriander seeds', '1 glass water'], ta: ['1 டேபிள்ஸ்பூன் கொத்தமல்லி விதை', '1 கண்ணாடி தண்ணீர்'] },
    preparation: { en: 'Soak overnight, strain and drink in morning.', ta: 'இரவில் ஊறவைத்து காலையில் குடிக்கவும்.' },
    dosage: { en: 'Daily for 5–7 days', ta: '5–7 நாட்கள் தொடர்ந்து' },
    safetyTips: { en: ['Consult doctor if infection persists'], ta: ['தொற்று நீடித்தால் மருத்துவரிடம் அணுகவும்'] },
    category: 'general',
    difficulty: 'easy',
    prepTime: 2,
    status: 'approved',
    _id: ""
  },
  {
    id: '15',
    name: { en: 'Gooseberry Juice for Immunity', ta: 'நோய் எதிர்ப்பு சக்திக்கு நெல்லிக்காய் ஜூஸ்' },
    symptoms: { en: ['Low Immunity', 'Fatigue'], ta: ['குறைந்த நோய் எதிர்ப்பு', 'சோர்வு'] },
    ingredients: { en: ['2 amla fruits', '1 tsp honey'], ta: ['2 நெல்லிக்காய்', '1 டீஸ்பூன் தேன்'] },
    preparation: { en: 'Extract juice from amla, mix with honey.', ta: 'நெல்லிக்காயை பிழிந்து தேன் சேர்க்கவும்.' },
    dosage: { en: 'Daily morning on empty stomach', ta: 'தினமும் காலையில் வெறும் வயிற்றில்' },
    safetyTips: { en: ['Avoid excess if acidity'], ta: ['அமிலம் அதிகமாக இருந்தால் தவிர்க்கவும்'] },
    category: 'immunity',
    difficulty: 'easy',
    prepTime: 5,
    status: 'approved',
    _id: ""
  },
  {
    id: '16',
    name: { en: 'Castor Oil Pack for Joint Pain', ta: 'மூட்டு வலிக்கு ஆமணக்கு எண்ணெய் தடவி' },
    symptoms: { en: ['Joint Pain', 'Arthritis'], ta: ['மூட்டு வலி', 'வாதம்'] },
    ingredients: { en: ['2 tbsp castor oil', 'Warm cloth'], ta: ['2 டேபிள்ஸ்பூன் ஆமணக்கு எண்ணெய்', 'சூடான துணி'] },
    preparation: { en: 'Apply oil on joint, cover with warm cloth for 30 mins.', ta: 'மூட்டில் எண்ணெய் தடவி சூடான துணியால் 30 நிமிடங்கள் மூடவும்.' },
    dosage: { en: '3–4 times per week', ta: 'வாரத்தில் 3–4 முறை' },
    safetyTips: { en: ['External use only'], ta: ['வெளிப்புற பயன்பாடு மட்டும்'] },
    category: 'bone',
    difficulty: 'easy',
    prepTime: 10,
    status: 'approved',
    _id: ""
  },
  {
    id: '17',
    name: { en: 'Ashwagandha Milk for Stress Relief', ta: 'மனஅழுத்தத்துக்கு அஸ்வகந்தா பால்' },
    symptoms: { en: ['Stress', 'Anxiety', 'Insomnia'], ta: ['மனஅழுத்தம்', 'கவலை', 'தூக்கமின்மை'] },
    ingredients: { en: ['1 tsp ashwagandha powder', '1 cup warm milk'], ta: ['1 டீஸ்பூன் அஸ்வகந்தா தூள்', '1 கப் வெந்நீர் பால்'] },
    preparation: { en: 'Mix powder in warm milk and drink.', ta: 'பாலில் தூளை கலந்து குடிக்கவும்.' },
    dosage: { en: 'Daily at night before bed', ta: 'தினமும் இரவு படுக்கும் முன்' },
    safetyTips: { en: ['Consult doctor if thyroid issues'], ta: ['தைராய்டு பிரச்சனை இருந்தால் மருத்துவரிடம் கேட்கவும்'] },
    category: 'stress',
    difficulty: 'easy',
    prepTime: 3,
    status: 'approved',
    _id: ""
  },
  {
    id: '18',
    name: { en: 'Carrot Juice for Eye Health', ta: 'கண் நலனுக்கு காரட் ஜூஸ்' },
    symptoms: { en: ['Weak Eyesight'], ta: ['கண் பலவீனம்'] },
    ingredients: { en: ['2 carrots'], ta: ['2 காரட்'] },
    preparation: { en: 'Blend carrots, strain juice, drink fresh.', ta: 'காரட்டை அரைத்து வடிகட்டி குடிக்கவும்.' },
    dosage: { en: 'Daily morning', ta: 'தினமும் காலை' },
    safetyTips: { en: ['Consume fresh only'], ta: ['புதியதாக மட்டுமே குடிக்கவும்'] },
    category: 'eyes',
    difficulty: 'easy',
    prepTime: 5,
    status: 'approved',
    _id: ""
  },
  {
    id: '19',
    name: { en: 'Turmeric Paste for Wounds', ta: 'காயங்களுக்கு மஞ்சள் பேஸ்ட்' },
    symptoms: { en: ['Minor Cuts', 'Wounds'], ta: ['சிறிய காயம்', 'கீறல்'] },
    ingredients: { en: ['1 tsp turmeric powder', 'Few drops water'], ta: ['1 டீஸ்பூன் மஞ்சள்', 'சில துளி தண்ணீர்'] },
    preparation: { en: 'Mix turmeric with water into paste, apply on wound.', ta: 'மஞ்சளை தண்ணீரில் கலந்து காயத்தில் தடவவும்.' },
    dosage: { en: 'Apply 2–3 times daily', ta: 'தினமும் 2–3 முறை' },
    safetyTips: { en: ['External use only'], ta: ['வெளிப்புறப் பயன்பாடு மட்டும்'] },
    category: 'skin',
    difficulty: 'easy',
    prepTime: 2,
    status: 'approved',
    _id: ""
  },
  {
    id: '20',
    name: { en: 'Buttermilk with Curry Leaves for Digestion', ta: 'செரிமானத்திற்கு மோர் கருவேப்பிலையுடன்' },
    symptoms: { en: ['Indigestion', 'Bloating'], ta: ['அஜீரணம்', 'வயிறு உப்புசம்'] },
    ingredients: { en: ['1 glass buttermilk', '5 curry leaves'], ta: ['1 கண்ணாடி மோர்', '5 கருவேப்பிலை'] },
    preparation: { en: 'Crush curry leaves, add to buttermilk, mix well.', ta: 'கருவேப்பிலை அரைத்து மோரில் சேர்க்கவும்.' },
    dosage: { en: '1 glass after heavy meals', ta: 'அதிக உணவுக்குப் பிறகு 1 கண்ணாடி' },
    safetyTips: { en: ['Avoid if lactose intolerant'], ta: ['பாலுக்கு ஒவ்வாமை இருந்தால் தவிர்க்கவும்'] },
    category: 'digestive',
    difficulty: 'easy',
    prepTime: 5,
    status: 'approved',
    _id: ""
  },
   {
     id: '21',
     name: { en: 'Fenugreek Water for Diabetes', ta: 'சர்க்கரைக்கு வெந்தயம் நீர்' },
     symptoms: { en: ['High Blood Sugar'], ta: ['உயர் இரத்தச் சர்க்கரை'] },
     ingredients: { en: ['1 tsp fenugreek seeds', '1 glass water'], ta: ['1 டீஸ்பூன் வெந்தயம்', '1 கண்ணாடி தண்ணீர்'] },
     preparation: { en: 'Soak seeds overnight, drink water in morning.', ta: 'வெந்தயத்தை இரவில் ஊறவைத்து காலையில் குடிக்கவும்.' },
     dosage: { en: 'Daily morning on empty stomach', ta: 'தினமும் காலை வெறும் வயிற்றில்' },
     safetyTips: { en: ['Monitor sugar levels regularly'], ta: ['சர்க்கரை அளவை அடிக்கடி பரிசோதிக்கவும்'] },
     category: 'general',
     difficulty: 'easy',
     prepTime: 2,
     status: 'approved',
     _id: ""
   },
  {
    id: '22',
    name: { en: 'Ginger Lemon Tea for Cold', ta: 'சளிக்கு இஞ்சி எலுமிச்சை டீ' },
    symptoms: { en: ['Cold', 'Sore Throat'], ta: ['சளி', 'தொண்டை வலி'] },
    ingredients: { en: ['1 inch ginger', '1 tsp lemon juice', '1 tsp honey', '1 cup water'], ta: ['1 அங்குலம் இஞ்சி', '1 டீஸ்பூன் எலுமிச்சை', '1 டீஸ்பூன் தேன்', '1 கப் தண்ணீர்'] },
    preparation: { en: 'Boil ginger in water, add lemon and honey.', ta: 'இஞ்சியை தண்ணீரில் கொதிக்கவைத்து எலுமிச்சை, தேன் சேர்க்கவும்.' },
    dosage: { en: '2 cups daily', ta: 'தினமும் 2 கப்' },
    safetyTips: { en: ['Avoid excess lemon if acidity'], ta: ['அமிலம் இருந்தால் எலுமிச்சை அதிகம் தவிர்க்கவும்'] },
    category: 'respiratory',
    difficulty: 'easy',
    prepTime: 8,
    status: 'approved',
    _id: ""
  },
  {
    id: '23',
    name: { en: 'Tulsi Leaves for Immunity', ta: 'நோய் எதிர்ப்பு சக்திக்கு துளசி இலை' },
    symptoms: { en: ['Low Immunity', 'Cold'], ta: ['நோய் எதிர்ப்பு குறைவு', 'சளி'] },
    ingredients: { en: ['5 tulsi leaves', '1 cup water'], ta: ['5 துளசி இலை', '1 கப் தண்ணீர்'] },
    preparation: { en: 'Boil leaves in water 5 mins, drink warm.', ta: 'இலையை தண்ணீரில் 5 நிமிடம் கொதிக்கவைத்து குடிக்கவும்.' },
    dosage: { en: 'Daily once in morning', ta: 'தினமும் காலை ஒரு முறை' },
    safetyTips: { en: ['Avoid chewing too many raw leaves'], ta: ['அதிகமாக பச்சையாக சாப்பிட வேண்டாம்'] },
    category: 'immunity',
    difficulty: 'easy',
    prepTime: 5,
    status: 'approved',
    _id: ""
  },
  {
    id: '24',
    name: { en: 'Clove Oil for Toothache', ta: 'பல் வலிக்கு கிராம்பு எண்ணெய்' },
    symptoms: { en: ['Toothache'], ta: ['பல் வலி'] },
    ingredients: { en: ['2 drops clove oil', 'Cotton ball'], ta: ['2 துளி கிராம்பு எண்ணெய்', 'பஞ்சு'] },
    preparation: { en: 'Dip cotton in oil, place on affected tooth.', ta: 'பஞ்சில் எண்ணெய் விட்டு பல் மீது வைக்கவும்.' },
    dosage: { en: 'As needed for pain relief', ta: 'வலி இருந்தால் மட்டும்' },
    safetyTips: { en: ['Do not swallow oil'], ta: ['எண்ணெயை விழுங்க வேண்டாம்'] },
    category: 'oral',
    difficulty: 'easy',
    prepTime: 1,
    status: 'approved',
    _id: ""
  },
  {
    id: '25',
    name: { en: 'Neem Paste for Pimples', ta: 'பிம்பிள்ஸுக்கு வேப்பிலை பேஸ்ட்' },
    symptoms: { en: ['Acne', 'Skin Pimples'], ta: ['முகப்பரு', 'பிம்பிள்ஸ்'] },
    ingredients: { en: ['5 neem leaves', 'Few drops water'], ta: ['5 வேப்பிலை', 'சில துளி தண்ணீர்'] },
    preparation: { en: 'Grind leaves into paste, apply on pimples.', ta: 'இலையை அரைத்து பிம்பிள்ஸில் தடவவும்.' },
    dosage: { en: 'Apply daily at night', ta: 'தினமும் இரவு தடவவும்' },
    safetyTips: { en: ['Wash off before morning'], ta: ['காலை எழுந்ததும் கழுவ வேண்டும்'] },
    category: 'skin',
    difficulty: 'easy',
    prepTime: 5,
    status: 'approved',
    _id: ""
  },
  {
    id: '26',
    name: { en: 'Coconut Oil Massage for Dandruff', ta: 'பொடுகுக்கு தேங்காய் எண்ணெய் தடவி' },
    symptoms: { en: ['Dandruff'], ta: ['பொடு'] },
    ingredients: { en: ['2 tbsp coconut oil', 'Few curry leaves (optional)'], ta: ['2 டேபிள்ஸ்பூன் தேங்காய் எண்ணெய்', 'சில கருவேப்பிலை (விருப்பம்)'] },
    preparation: { en: 'Warm oil slightly, massage scalp for 15 mins.', ta: 'எண்ணெயை சூடாக்கி தலையில் 15 நிமிடம் மசாஜ் செய்யவும்.' },
    dosage: { en: '2–3 times weekly', ta: 'வாரத்தில் 2–3 முறை' },
    safetyTips: { en: ['Wash hair after application'], ta: ['பயன்படுத்திய பிறகு தலைமுடி கழுவவும்'] },
    category: 'hair',
    difficulty: 'easy',
    prepTime: 15,
    status: 'approved',
    _id: ""
  },
  {
    id: '27',
    name: { en: 'Cardamom for Bad Breath', ta: 'வாசனைக்கு ஏலக்காய்' },
    symptoms: { en: ['Bad Breath'], ta: ['வாய்நாற்றம்'] },
    ingredients: { en: ['1 cardamom pod'], ta: ['1 ஏலக்காய்'] },
    preparation: { en: 'Chew pod slowly after meals.', ta: 'உணவுக்குப் பிறகு ஏலக்காயை மென்று சாப்பிடவும்.' },
    dosage: { en: '2–3 times daily', ta: 'தினமும் 2–3 முறை' },
    safetyTips: { en: ['Avoid excess'], ta: ['அதிகமாக சாப்பிட வேண்டாம்'] },
    category: 'oral',
    difficulty: 'easy',
    prepTime: 1,
    status: 'approved',
    _id: ""
  },
  {
    id: '28',
    name: { en: 'Banana for Constipation', ta: 'மலச்சிக்கலுக்கு வாழைப்பழம்' },
    symptoms: { en: ['Constipation'], ta: ['மலச்சிக்கல்'] },
    ingredients: { en: ['1 ripe banana'], ta: ['1 பழுத்த வாழைப்பழம்'] },
    preparation: { en: 'Peel and eat fresh banana.', ta: 'வாழைப்பழத்தை சுத்தம் செய்து சாப்பிடவும்.' },
    dosage: { en: '1 banana daily', ta: 'தினமும் 1 வாழைப்பழம்' },
    safetyTips: { en: ['Avoid overripe bananas for diabetics'], ta: ['சர்க்கரை நோயாளிகள் அதிகம் சாப்பிட வேண்டாம்'] },
    category: 'digestive',
    difficulty: 'easy',
    prepTime: 2,
    status: 'approved',
    _id: ""
  },
  {
    id: '29',
    name: { en: 'Warm Salt Gargle for Sore Throat', ta: 'தொண்டை வலிக்கு உப்பு தண்ணீர் கக்கல்' },
    symptoms: { en: ['Sore Throat', 'Mild Infection'], ta: ['தொண்டை வலி', 'சிறிய தொற்று'] },
    ingredients: { en: ['1 tsp salt', '1 cup warm water'], ta: ['1 டீஸ்பூன் உப்பு', '1 கப் வெந்நீர்'] },
    preparation: { en: 'Dissolve salt in warm water, gargle for 30 secs.', ta: 'உப்பை வெந்நீரில் கலந்து 30 விநாடிகள் கக்கவும்.' },
    dosage: { en: '2–3 times daily', ta: 'தினமும் 2–3 முறை' },
    safetyTips: { en: ['Do not swallow water'], ta: ['உப்பு தண்ணீரை விழுங்க வேண்டாம்'] },
    category: 'respiratory',
    difficulty: 'easy',
    prepTime: 3,
    status: 'approved',
    _id: ""
  },
  {
    id: '30',
    name: { en: 'Papaya for Digestion', ta: 'செரிமானத்திற்கு பப்பாளி' },
    symptoms: { en: ['Indigestion', 'Bloating'], ta: ['அஜீரணம்', 'வயிறு உப்புசம்'] },
    ingredients: { en: ['1 bowl ripe papaya'], ta: ['1 கிண்ணம் பழுத்த பப்பாளி'] },
    preparation: { en: 'Peel and cut papaya, eat fresh.', ta: 'பப்பாளியை சுத்தம் செய்து சாப்பிடவும்.' },
    dosage: { en: '1 bowl daily', ta: 'தினமும் 1 கிண்ணம்' },
    safetyTips: { en: ['Avoid raw papaya during pregnancy'], ta: ['கர்ப்பத்தில் பச்சைப் பப்பாளி தவிர்க்கவும்'] },
    category: 'digestive',
    difficulty: 'easy',
    prepTime: 5,
    status: 'approved',
    _id: ""
  },
];


export const categories = {
  en: {
    respiratory: 'Respiratory',
    skin: 'Skin Care',
    digestive: 'Digestive',
    general: 'General Health',
    hair: 'Hair Care',
    bone: 'Bone & Joint',
    immunity: 'Immunity',
    oral: 'Oral Care',
    women: 'Women’s Health',
    men: 'Men’s Health',
    children: 'Child Care',
    eyes: 'Eye Care',
    stress: 'Mental Wellness',
  },
  ta: {
    respiratory: 'சுவாச மண்டலம்',
    skin: 'தோல் பராமரிப்பு',
    digestive: 'செரிமான மண்டலம்',
    general: 'பொது உடல்நலம்',
    hair: 'முடி பராமரிப்பு',
    bone: 'எலும்பு & மூட்டு',
    immunity: 'நோய் எதிர்ப்பு',
    oral: 'வாய்நீர் பராமரிப்பு',
    women: 'பெண்கள் நலம்',
    men: 'ஆண்கள் நலம்',
    children: 'குழந்தை நலம்',
    eyes: 'கண் பராமரிப்பு',
    stress: 'மன அமைதி',
  },
};