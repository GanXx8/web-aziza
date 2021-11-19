const formatNumber = (number) => Intl.NumberFormat('id-ID').format(number)

const setIndonesiaData = (data) => {
    const positive = document.getElementById('covid-positive')
    const sembuh = document.getElementById('covid-sembuh')
    const meninggal = document.getElementById('covid-meninggal')
    const perawatan = document.getElementById('perawatan')
    
    positive.textContent = formatNumber(data.positif)
    sembuh.textContent = formatNumber(data.sembuh)
    meninggal.textContent = formatNumber(data.meninggal)
    perawatan.textContent = formatNumber(data.dirawat)
}

const getIndonesiaData = () => {
    try {
        fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia')
            .then(res => res.json())
            .then(json => setIndonesiaData(json))
    } catch (error) {
        console.log(error)
    }
}

getIndonesiaData()

// batass
const setIndonesiaDataVaksin = (data) => {
    const sasaran = document.getElementById('sasaran')
    const lansia = document.getElementById('lansia')
    const public = document.getElementById('public')
    const vaksin1 = document.getElementById('vaksin1')
    const vaksin2 = document.getElementById('vaksin2')
    
    sasaran.textContent = formatNumber(data.totalsasaran)
    lansia.textContent = formatNumber(data.sasaranvaksinlansia)
    public.textContent = formatNumber(data.sasaranvaksinpetugaspublik)
    vaksin1.textContent = formatNumber(data.vaksinasi1)
    vaksin2.textContent = formatNumber(data.vaksinasi2)
}

const getIndonesiaDataVaksin = () => {
    try {
        fetch('https://vaksincovid19-api.vercel.app/api/vaksin')
            .then(res => res.json())
            .then(json => setIndonesiaDataVaksin(json))
    } catch (error) {
        console.log(error)
    }
}

getIndonesiaDataVaksin()