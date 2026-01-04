const getImages = (folderName, count) => {
  return Array.from({ length: count }, (_, i) => {
    // Path bersih tanpa spasi aneh
    return `/assets/img/event/${folderName}/${i + 1}.webp`;
  });
};
// Khusus untuk Logo (jika logo juga ada di ImageKit dengan pola nama tertentu atau nama tetap)
// Jika logo namanya berbeda-beda, tulis manual path-nya.
const getLogo = (folderName) => {
   // Asumsi logo namanya "logo.webp" di dalam folder tersebut, sesuaikan jika beda
   return `assets/brand/logo${folderName}.webp` 
}

export const events = [
  {
    id: 1,
    title: "ABSOLUTE",
    theme: "Abillity Skill and Learning Math Competition",
    description:
      "ABSOLUTE Abillity Skill and Learning Math Competition, merupakan Event yang diselenggarakan oleh HIMATIKA UIN SGD Bandung dan merupakan Kegiatan besar pertama yang dilaksanakan. Acara ini bertujuan untuk meningkatkan minat dan kemampuan Mahasiswa dalam bidang matematika, mapun bakat.",
    logoUrl: ["assets/brand/logoAbsolute.webp"], 
    images: getImages("absolute", 5), 
    aftermovieUrl: ""
  },
  {
    id: 2,
    title: "HIMATIKA Mengabdi",
    theme: "Pengabdian kepada Masyarakat bersama HIMATIKA",
    description:
      "Sebagai wujud pemenuhan Tri Dharma Perguruan Tinggi, khususnya pada aspek pengabdian kepada masyarakat. Melalui kegiatan ini, mahasiswa didorong untuk menumbuhkan dan mengembangkan kesadaran sosial sehingga lebih peka terhadap kondisi masyarakat. Selain itu, kegiatan ini juga menjadi wadah bagi Mahasiswa Pendidikan Matematika untuk mengasah kreativitas, serta berkontribusi nyata dalam memberikan manfaat bagi lingkungan sekitar. ",
    logoUrl: ["assets/brand/logoHimabdi.webp"],
    // Ganti angka 8 dengan jumlah foto di folder 'himaabdi'
    images: getImages("himaabdi", 5), 
    aftermovieUrl: ""
  },
  {
    id: 3,
    title: "TEOREMA",
    theme: "Ta'aruf Edukasi Orientasi Jurusan Pendidikan Matematika",
    description:
      "TEOREMA merupakan bentuk pembinaan mahasiswa baru untuk menumbuhkan kesadaran spiritual, intelektual, dan sosial melalui pengalaman belajar yang menyeluruh. Program kerja ini diorientasikan pada penanaman nilai beradab, berwawasan, kreatif, serta bersinergi agar mahasiswa mampu berkembang secara utuh. Dengan begitu, TEOREMA menjadi sarana menanamkan nilai keislaman, pendidikan, dan keorganisasian sebagai fondasi awal berproses di HIMATIKA.",
    logoUrl: ["assets/brand/logoTeo.webp"],
    images: getImages("teorema", 10), // Sesuaikan jumlah foto
    aftermovieUrl: ""
  },
  {
    id: 4,
    title: "STUKOM",
    theme: "Studi Komparatif: HIMATIKA UIN X HIMATIKA ITB X GUMATIKA IPB",
    description:
      "Studi Komparatif merupakan kegiatan kunjungan dan forum diskusi yang diselenggarakan HIMATIKA UIN Sunan Gunung Djati sebagai sarana pertukaran gagasan, pengalaman, serta wawasan keorganisasian dengan himpunan mahasiswa lain. Kegiatan ini difokuskan pada pemaparan program kerja, sistem kepengurusan, dan manajemen organisasi guna membandingkan serta mengambil praktik-praktik terbaik yang dapat diadaptasi, sehingga tercipta hubungan kelembagaan yang harmonis dan peluang kerja sama yang berkelanjutan.",
    logoUrl: null,
    images: getImages("stukom", 10), // Sesuaikan jumlah foto
  },
  {
    id: 5,
    title: "GAMMA FEST",
    theme: "Generation of Mathematics Education Festival",
    description:
      "GAMMA FEST adalah event terakhir yang diselenggarakan oleh HIMATIKA sekaligus sebagai perayaan milad HIMATIKA UIN SGD Bandung.",
    logoUrl: ["assets/brand/logoGamma.webp"],
    images: getImages("gamma", 12), // Sesuaikan jumlah foto
    aftermovieUrl: ""
  },
  // {
  //   id: 6,
  //   title: "MUSKOM",
  //   theme: "Musyawarah Komisariat",
  //   description:
  //     "STUKOM (Studi Komparatif) adalah program studi banding ke Himpunan Mahasiswa Matematika di universitas lain untuk bertukar pikiran, memperluas wawasan, dan menjalin jejaring.",
  //   logoUrl: [[logoStukom]],
  //   images: getImagesFromArray(absoluteFiles), 
  // }
]