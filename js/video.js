document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("myVideo");

    // Danh sách các video
    var videoList = ["./video/v1.mp4", "./video/v2.mp4", "./video/v3.mp4", "./video/v4.mp4", "./video/v5.mp4", "./video/v6.mp4", "./video/v7.mp4"];
    var currentVideoIndex = 0;

    // Sự kiện kết thúc video
    video.addEventListener("ended", function() {
        // Chuyển đến video tiếp theo
        playNextVideo();
    });

    function playNextVideo() {
        // Kiểm tra nếu đã hết danh sách video
        if (currentVideoIndex < videoList.length - 1) {
            // Chuyển đến video tiếp theo trong danh sách
            currentVideoIndex++;
            var nextVideoSrc = videoList[currentVideoIndex];
            
            // Thay đổi đường dẫn và chơi video
            video.src = nextVideoSrc;
            video.load();
            video.play();
        } else {
            // Nếu đã chạy hết danh sách, quay lại video đầu tiên
            currentVideoIndex = 0;
            var firstVideoSrc = videoList[currentVideoIndex];
            
            // Thay đổi đường dẫn và chơi video
            video.src = firstVideoSrc;
            video.load();
            video.play();
        }
    }

    // Chạy video đầu tiên khi trang được tải
    video.play();
});