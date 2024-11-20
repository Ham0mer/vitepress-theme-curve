<template>
<div class="bing" v-if="bingData && bingData.length">
    <h1 class="title">必应壁纸</h1>
    <h3>当前存储 {{ bingTotle }} 天壁纸</h3>
    <div class="bing-content" style="grid-template-columns: 1fr 1fr 1fr">
            <div v-for="item in bingData" :key="item.id">
                <div
                    class="bing-item like image"
                    :style="{
                        '--color': item.color.DarkVibrant,
                        'background-image': `url(https://bing.dogb.cn${item.url.thumbnail})`
                    }"
                >
                    <div class="image-content">
                        <span class="tip">{{ item.date}}</span>
                        <span class="title2">{{ item.title }}</span>
                        <div class="image-desc">
                            <span class="left">{{ item.copyright }}</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>
</template>

<script setup>
import { getBing } from '@/api';

const bingData = ref([]);
const bingTotle = ref(0);

const getBingData = async () => {
    try {
        const response = await getBing();
        bingData.value = response.list;
        bingTotle.value = response.totle;
    } catch (error) {
        console.error("壁纸出错：", error);
        $message.error("壁纸出错，请重试");
    }
};

getBingData();
</script>
<style scoped>
.bing {
    .title {
      font-size: 2.4rem;
      text-align: center;
      border: none;
    }
    .bing-content {
      display: grid;
      grid-template-columns: auto auto;
      gap: 20px;
      margin-bottom: 20px;
      .bing-item {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 1.2rem 2rem;
        border-radius: 12px;
        background-color: var(--main-card-background);
        border: 1px solid var(--main-card-border);
        box-shadow: 0 8px 12px -4px var(--main-border-shadow);
        overflow: hidden;
        .tip {
          font-size: 14px;
          opacity: 0.8;
          margin-bottom: 12px;
        }
        .title1 {
          font-size: 36px;
          font-weight: bold;
          opacity: 0.6;
        }
        .title2 {
          font-size: 36px;
          font-weight: bold;
          margin-right: 4rem;
        }
        .text {
          font-size: 18px;
          margin: 0.6rem 0;
        }
        &.child {
          background-color: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
          gap: 20px;
          .bing-item {
            height: 100%;
          }
        }
        &.like {
          min-height: 400px;
          @media (max-width: 768px) {
            min-height: 300px;
          }
        }
        &.image {
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          .image-content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            z-index: 2;
            color: #fff;
            .image-desc {
              width: 100%;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              margin-top: auto;
              &.opacity {
                font-size: 14px;
                color: #eee;
                opacity: 0.8;
                a {
                  color: #eee;
                  &:hover {
                    color: var(--main-color);
                  }
                }
              }
            }
          }
          &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            box-shadow: inset 0 -70px 204px 10px var(--color);
            z-index: 0;
          }
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>