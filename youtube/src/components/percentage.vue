<template>
  <div class="app-container">
    <el-container class="inner-container">
      <el-header class="header-container">
        <div class="header1">
          <i class="el-icon-s-operation"></i>
          <img
            src="../../youtube.png"
            alt="YouTube"
            style="margin-left: 10px; width: 120px; height: 30px"
          />
        </div>
        <div class="header2">
          <div class="search-container">
            <el-input
              class="rounded-input"
              placeholder="Search"
              v-model="input1"
              :style="{ width: '550px' }"
            >
            </el-input>
            <el-button class="rounded-button" icon="el-icon-search"></el-button>
          </div>
          <i class="el-icon-microphone"></i>
        </div>
        <div class="header3">
          <i class="el-icon-video-camera"></i>
          <i class="el-icon-bell"></i>
          <i class="el-icon-user"></i>
        </div>
      </el-header>

      <el-container class="content-container">
        <el-main class="main-content">
          <div>
            <iframe
              width="964"
              height="542"
              src="https://www.youtube.com/embed/g9-8GYvtygk"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <strong style="font-size: larger; color: black"
              >FINAL FANTASY XVI – Ascension Trailer</strong
            >
          </div>
          <div class="youtuber">
            <div class="youtuber-info">
              <img
                src="../../youtuber.png"
                alt="YouTuber"
                style="width: 174px; height: 45px"
              />
              <el-button
                class="custom-button"
                type="info"
                round
                style="margin-left: 10px"
                >Subscribe</el-button
              >
            </div>

            <div class="youtuber-info">
              <el-progress
                :text-inside="true"
                :stroke-width="24"
                :percentage="88"
                status="success"
                style="width: 200px"
              ></el-progress>

              <button class="button">
                <i class="el-icon-share"></i><strong>Share</strong>
              </button>
              <button class="button">
                <i class="el-icon-download"></i><strong>Download</strong>
              </button>
              <button class="button">
                <i class="el-icon-document-add"></i><strong>Save</strong>
              </button>
              <button class="button">
                <i class="el-icon-more"></i><strong></strong>
              </button>
            </div>
          </div>
        </el-main>
        <el-aside class="aside" width="400px">
          <div>
            <el-button type="info" size="small" plain>ALL</el-button>
            <el-button type="info" size="small" plain>Final fantasy</el-button>
            <el-button type="info" size="small" plain>Games</el-button>
            <el-button type="info" size="small" plain>Relatives</el-button>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div>
            <img
              src="../../recommendation.png"
              alt="recommendation"
              style="margin-top: 20px; width: 380px; height: 611px"
            />
          </div>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>
    
    <script>
export default {
  data() {
    return {
      input1: "",
      value: "4.5",
    };
  },
};
</script>
    
    <style>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.inner-container {
  display: flex;
  flex-direction: column;
}

.header-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.header1,
.header2,
.header3 {
  display: flex;
  align-items: center;
}

.header1 > *,
.header2 > *,
.header3 > * {
  margin: 0 10px;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

.main-content {
  display: flex;
  align-items: center;
}
.header-container {
  font-size: 26px;
}
.search-container {
  display: flex;
  align-items: center;
  border: 1px solid #ced4da;
  border-radius: 22px;
  overflow: hidden;
}

.rounded-input .el-input__inner,
.rounded-button {
  border: none;
}

.rounded-input .el-input__inner {
  border-right: none;
}
.aside {
  margin-top: 30px;
}
.youtuber {
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.youtuber-info {
  display: flex;
  align-items: flex-start;
  align-items: center;
}
.custom-button {
  background-color: black !important;
  color: white !important;
  padding-left: 5px !important; /* Set as needed */
  padding-right: 5px !important; /* Set as needed */
  border: 2px solid black !important;
}

.button-group {
  display: flex;
  background-color: #e4e4e4; /* 任意的灰色背景 */
  border-radius: 25px; /* 任意的圆角大小 */
}

.divider {
  width: 3px; /* 增加宽度以使其更明显 */
  background-color: #000000; /* 更深的颜色 */
  align-self: center; /* 让线居中显示 */
}

.button {
  padding: 10px 10px; /* 根据需要调整 */
  background-color: #e9e9e9; /* 与 .button-group 的背景颜色一致 */
  color: black;
  border: none;
  border-radius: 25px; /* 添加圆角 */
  margin-left: 10px; /* 添加右外边距 */
}

.button.left {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}

.button.right {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  margin-left: -1px; /* 重叠左边的边框以避免双边框的现象 */
}
.button:last-child {
  margin-right: 0;
}
</style>
    