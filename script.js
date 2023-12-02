// public/script.js

function submitReservation() {
    // 선택한 정보 가져오기
    const name = document.getElementById('name').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;

    // 정보를 모달에 표시
    const reservationInfo = `예약 정보:<br>
                             이름: ${name}<br>
                             체크인 날짜: ${checkIn}<br>
                             체크아웃 날짜: ${checkOut}`;

    document.getElementById('reservationInfo').innerHTML = reservationInfo;

    // 모달 표시
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function closeModal() {
    // 모달 닫기
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}
