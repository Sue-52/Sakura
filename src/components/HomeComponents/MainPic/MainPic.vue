<template>
  <div class="header_top">
    <!-- 波浪1 -->
    <div class="wave-first"></div>
    <!-- 波浪2 -->
    <div class="wave-second"></div>
    <!-- 中间整体的图片 -->
    <figure id="centerBar" class="centerBar">
      <div class="focusinfo">
        <!-- 中间文字 -->
        <h1 class="center-text">Hello The World!</h1>
        <!-- 首页信息 -->
        <div class="header-info">
          <!-- 每日一句 -->
          <p>
            <i class="iconfont icon-quoteleft"></i>
            You got to put the past behind you before you can move on.
            <i class="iconfont icon-quoteright"></i>
          </p>
          <!-- 社交图标 -->
          <div class="social_communication">
            <li v-for="item in social_icon" :key="item.id">
              <a
                href="#"
                :class="item.iconfont"
                :style="{ color: item.color }"
              ></a>
            </li>
          </div>
        </div>
      </div>
    </figure>
    <div @click="handleDown" class="header-top_down">
      <i class="iconfont icon-down"></i>
    </div>
  </div>
</template>

<script>
  import { ref } from "vue";

  export default {
    name: "MainPic",
    setup() {
      let social_icon = ref([
        { id: "1", iconfont: "iconfont icon-zuo", color: "#1296db" },
        { id: "2", iconfont: "iconfont icon-github", color: "#ffffff" },
        { id: "3", iconfont: "iconfont icon-Telegram", color: "#0088cc" },
        {
          id: "4",
          iconfont: "iconfont icon-wangyiyunyinle1-copy",
          color: "#e94e37",
        },
        { id: "5", iconfont: "iconfont icon-Twitter", color: "#1ab2e8" },
        { id: "6", iconfont: "iconfont icon-QQ", color: "#fff" },
        { id: "7", iconfont: "iconfont icon-zhihu", color: "#e7e5e3" },
        { id: "8", iconfont: "iconfont icon-youjian", color: "#ffbf00" },
        { id: "9", iconfont: "iconfont icon-you", color: "#1296db" },
      ]);

      //#region 实现点击向下箭头后下拉
      const handleDown = () => {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(top);
        const timeTop = setInterval(() => {
          document.body.scrollTop = document.documentElement.scrollTop = top += 20;
          if (top >= 550) {
            clearInterval(timeTop);
          }
        }, 10);
      };
      //#endregion
      return {
        social_icon,
        handleDown,
      };
    },
  };
</script>

<style lang="scss" scoped>
  /* 中间图片背景样式 start */
  .header_top {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      background-image: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/dot.gif);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 3;
      background-attachment: fixed;
    }
  }

  #centerBar {
    width: 100%;
    height: 550px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    z-index: 1;
  }

  @media (max-width: 860px) {
    #centerBar {
      height: 300px;
      background-attachment: scroll;
    }
  }
  .centerBar {
    background-image: url(./img/AK-01.jpg);
    background-position: center center;
  }
  /* 中间图片背景样式 end */

  /* 中间字体样式和动画 start */
  .focusinfo {
    position: relative;
    max-width: 800px;
    padding: 0 10px;
    top: 49.3%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 99;
  }

  h1 {
    position: relative;
    color: #fff;
    mix-blend-mode: lighten;
  }
  .center-text {
    margin: auto;
    font-family: "Ubuntu", sans-serif;
    font-size: 68px;
    text-transform: uppercase;
  }

  h1,
  h1::after {
    font-size: 68px;
    font-family: "Ubuntu", sans-serif;
    background: linear-gradient(transparent 5%);
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    line-height: 76px;
    box-shadow: 0px 0px 6px #00e6f6;
    outline: transparent;
    position: relative;
  }

  h1::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);

    content: "Hello The World!";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
    clip-path: var(--slice-0);
  }

  h1:hover::after {
    animation: 1s glitch;
    animation-timing-function: steps(2, end);
  }

  @keyframes glitch {
    0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
    }
    10% {
      clip-path: var(--slice-3);
      transform: translate(10px, 10px);
    }
    20% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 10px);
    }
    30% {
      clip-path: var(--slice-3);
      transform: translate(0px, 5px);
    }
    40% {
      clip-path: var(--slice-2);
      transform: translate(-5px, 0px);
    }
    50% {
      clip-path: var(--slice-3);
      transform: translate(5px, 0px);
    }
    60% {
      clip-path: var(--slice-4);
      transform: translate(5px, 10px);
    }
    70% {
      clip-path: var(--slice-2);
      transform: translate(-10px, 10px);
    }
    80% {
      clip-path: var(--slice-5);
      transform: translate(20px, -10px);
    }
    90% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 0px);
    }
    100% {
      clip-path: var(--slice-1);
      transform: translate(0);
    }
  }
  /* 中间字体样式和动画 end */

  /* 中间的小字样式 start */
  .header-info {
    width: 68%;
    margin: auto;
    font-size: 16px;
    color: #eaeadf;
    background: rgba(0, 0, 0, 0.5);
    padding: 15px;
    margin-top: 22px;
    letter-spacing: 0;
    line-height: 30px;
    border-radius: 10px;
    box-sizing: initial;
    white-space: nowrap;

    &::before {
      content: "";
      position: absolute;
      top: 68px;
      left: 30%;
      margin-left: -15px;
      border-width: 15px;
      border-style: solid;
      border-color: transparent transparent rgba(0, 0, 0, 0.5) transparent;
    }

    p {
      margin: 0;
      font-family: "Ubuntu", sans-serif;
      font-weight: 700;
    }

    .social_communication {
      height: 32px;
      margin-bottom: -15px;
      margin-left: 10px;
      list-style: none;
      display: inline-block;

      li {
        float: left;
        margin-right: 10px;

        :first-child,
        :last-child {
          height: 35px;
          width: 35px;
          padding: 6px;
          background: 0 0;
        }
      }
      a {
        display: block;
      }
    }
  }
  /* 中间的小字样式 end */

  /* 波浪样式 start */
  .wave-first {
    width: auto;
    height: 65px;
    background: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.5.1/img/Sakura/images/wave1.png)
      repeat-x;
    position: absolute;
    bottom: 0;
    width: 400%;
    left: -236px;
    z-index: 5;
    opacity: 1;
    // transiton-property: opacity, bottom;
    // transition-duration: 0.4s, 0.4s;
    animation: rotate_left 40s linear infinite;
  }
  @keyframes rotate_left {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -1000px 0;
    }
  }

  .wave-second {
    width: auto;
    height: 80px;
    background: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.5.1/img/Sakura/images/wave2.png)
      repeat-x;
    position: absolute;
    bottom: 0;
    width: 400%;
    left: 0;
    z-index: 4;
    opacity: 1;
    // transiton-property: opacity, bottom;
    // transition-duration: 0.4s, 0.4s;
    animation: rotate_right 40s linear infinite;
  }
  @keyframes rotate_right {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  @media (max-width: 860px) {
    .wave-first,
    .wave-second {
      display: none;
    }
  }
  /* 波浪样式 end */

  // 顶部向下样式 start
  .header-top_down {
    position: absolute;
    bottom: 50px;
    left: 50%;
    cursor: pointer;
    z-index: 5;
    animation: float 2s linear infinite;

    i {
      font-size: 28px;
      color: #fff;
      transform: scale(1.5, 1);
    }
  }
  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
    100% {
      transform: translateY(0);
    }
  }
  // 顶部向下样式 end
</style>
