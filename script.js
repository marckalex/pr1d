function simplifyTikTokCode(code) {
    // Simplificar el código TikTok según tu lógica.
    // Por ahora, simplemente devolvemos el mismo código.
    return code;
}

function parseTikTokCode(code) {
    // Parsear el código TikTok y extraer la información en el formato deseado (un array de objetos).
    // Por ahora, simplemente devolvemos un ejemplo fijo.
    return [
        { cite: 'https://www.tiktok.com/@adsremix/video/7229502144129371398', id: '7229502144129371398' },
        // Puedes agregar más elementos aquí según sea necesario
    ];
}

function generateContent() {
    const inputCode = document.getElementById('inputCode').value.trim();
    const outputCode = document.getElementById('outputCode');
    const outputJson = document.getElementById('outputJson');
    const downloadBtn = document.getElementById('downloadBtn');

    // Validación de longitud mínima
    if (inputCode.length === 0) {
        alert('Por favor, pega un código de TikTok.');
        return;
    }

    // Simplificar el código TikTok
    const simplifiedCode = simplifyTikTokCode(inputCode);
    outputCode.value = simplifiedCode;

    // Generar la estructura JSON automáticamente
    const tiktokVideos = parseTikTokCode(inputCode);
    const jsonContent = JSON.stringify({ tiktokVideos }, null, 2);
    outputJson.value = jsonContent;

    // Habilitar el botón de descarga
    downloadBtn.removeAttribute('disabled');
}

function downloadJson() {
    const jsonContent = document.getElementById('outputJson').value;
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tiktok_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
