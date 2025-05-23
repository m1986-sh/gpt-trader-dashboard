
document.getElementById('file-upload').addEventListener('change', function () {
    const resultBox = document.getElementById('analysis-result');
    resultBox.innerText = 'در حال پردازش عکس... (این نسخه آزمایشی است)';
});
