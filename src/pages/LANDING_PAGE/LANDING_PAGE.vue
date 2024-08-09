<script setup>
  import { useRouter } from 'vue-router';
  import { reactive, onMounted } from 'vue';

  const props = defineProps({});

  const data = reactive({});

  const router = useRouter();
</script>

<template>
  <div class="flex-col relative page">
    <div class="flex-col section">
      <div class="flex-row justify-between items-center">
        <img
          class="image_3"
          src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=fb177f0a819164f5a83168cad38d6546.png"
        />
        <div class="flex-row group">
          <img
            class="image"
            src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=10ef1bb38710b341a20c394a10f53539.png"
          />
          <div class="ml-20 flex-row items-center section_2">
            <span class="font text">ENTER APP</span>
            <img
              class="ml-48 shrink-0 image_2"
              src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=1a2e7df2dd8f93080c975abeeeadc2b3.png"
            />
          </div>
        </div>
      </div>
      <div class="flex-row relative group_2 mt-17">
        <div class="pos_2">
          <span class="font_2">
            The Liquidity Hub
            <br />
          </span>
          <span class="font_2">on</span>
          <span class="font_2 text_2">ZIRCUIT</span>
        </div>
        <div class="group_3 pos_3">
          <span class="font_3 text_3">Trade</span>
          <span class="font_4 text_7">,</span>
          <span class="font_3">earn yields</span>
          <span class="font_4 text_4">&</span>
          <span class="font_3">points</span>
          <span class="font_4 text_5">directly on</span>
          <span class="font_3 text_6">Zircuit L2</span>
        </div>
        <div class="flex-col justify-start items-center text-wrapper pos_4">
          <span class="font_5 text_8">ENTER APP</span>
        </div>
        <div class="flex-col justify-start items-center text-wrapper_2 pos_5">
          <span class="font_5 text_9">DOCS</span>
        </div>
        <div class="flex-col justify-start items-end section_3 pos">
          <div class="flex-row items-center section_6">
            <span class="font text_13">ENTER APP</span>
            <img
              class="ml-48 shrink-0 image_2"
              src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=1a2e7df2dd8f93080c975abeeeadc2b3.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-col section_8">
      <span class="self-start font_8 text_14">Features</span>
      <div class="flex-col self-stretch mt-97">
        <div class="flex-row items-center group_5">
          <img
            class="image_5"
            src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=ef3aef79410c59f859af1783e809b0cc.png"
          />
          <span class="font_4 text_15 ml-17">Security first</span>
        </div>
        <div class="mt-16 flex-row items-start">
          <div class="flex-col section_9">
            <img
              class="image_6"
              src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=84708bb027dbe8505041304c2758a833.png"
            />
            <div class="flex-col items-start group_10 mt-149">
              <span class="font_6 text_18">Audited by several top security teams</span>
              <span class="mt-20 font_6">Team members fully KYC</span>
              <span class="mt-20 font_6 text_19">Testnet bug hunting program before launch</span>
            </div>
          </div>
          <div class="flex-col group_6 ml-17">
            <div class="flex-row items-center group_7">
              <img
                class="image_5"
                src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=168e8c33766feb87e316fb058e347ae7.png"
              />
              <span class="font_4 text_16 ml-19">Maximize liquidity efficiency</span>
            </div>
            <div class="flex-col section_10">
              <img
                class="image_6"
                src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=afea5e3a628fdabee73c56db6d566af2.png"
              />
              <div class="flex-col items-start group_10 mt-141">
                <span class="font_6">Stable and violate swap for low fees</span>
                <span class="font_6 text_20 mt-21">Concentrated liquidity</span>
                <span class="font_6 mt-21">Special swap for LSTs</span>
              </div>
            </div>
          </div>
          <div class="flex-col group_8 ml-17">
            <div class="flex-row items-center group_9">
              <img
                class="image_5"
                src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=708affe774ae38eee25d4e0639e25906.png"
              />
              <span class="ml-14 font_4 text_17">Yield-Friendly</span>
            </div>
            <div class="flex-col section_11">
              <img
                class="image_6"
                src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=7ef0c1bacb9417ec85dcd6fdd473aa92.png"
              />
              <div class="flex-col items-start group_11 mt-180">
                <span class="font_6">Earn 5 different points</span>
                <span class="mt-20 font_6 text_21">Greater LP rewards for LSTs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-col section_12 pos_9">
      <span class="self-start font_8 text_22">STATS</span>
      <div class="flex-col justify-start items-center self-stretch relative mt-17">
        <div class="flex-col justify-start items-center section_13"><div class="group_12"></div></div>
        <span class="font_9 pos_14">$850K</span>
        <span class="font_10 text_28 pos_15">TVL</span>
        <div class="flex-col items-start section_18 pos_13">
          <span class="font_9 text_27">30</span>
          <span class="mt-32 font_10 text_29">Tokens</span>
        </div>
        <div class="flex-col justify-start group_13 pos_11">
          <div class="flex-col section_15">
            <span class="self-start font_10 text_24">trader</span>
            <div class="mt-66 flex-col items-start self-stretch">
              <span class="font_9 text_25">$8.500.000</span>
              <span class="font_10 text_26 mt-27">Trading volume</span>
            </div>
          </div>
        </div>
        <div class="flex-col justify-start section_16 pos_12"><div class="section_17"></div></div>
        <div class="flex-col section_14 pos_10">
          <span class="self-center font_9 text_23">35K</span>
          <span class="self-start font_10 mt-29">Individual Users</span>
        </div>
      </div>
    </div>
    <div class="section_4 pos_6"></div>
    <div class="flex-col section_5 pos_7">
      <div class="flex-row justify-between self-stretch group_4">
        <span class="font_6 text_10">Home</span>
        <span class="font_7">Features</span>
        <span class="font_6 text_11">Stats</span>
        <span class="font_7">Partners</span>
        <span class="font_6 text_12">Join us</span>
      </div>
      <div class="self-start section_7"></div>
    </div>
    <img
      class="image_4 pos_8"
      src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=eefc428a6deaf6f57d88c49c38421536.png"
    />
    <div class="flex-col justify-start group_14 pos_16">
      <div class="flex-col section_19">
        <span class="self-end text_30">OUR PARTNER</span>
        <div class="mt-2 flex-row justify-end items-center self-stretch">
          <img
            class="image_7"
            src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=24aa8b9561996bd26128590556de5a4d.png"
          />
          <div class="ml-36 flex-row items-end">
            <div class="flex-row">
              <img
                class="image_8"
                src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=d66e4397cd56143656f3ff5451106ea6.png"
              />
              <img
                class="image_9 ml-5"
                src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=f98dbadae0817959e792bddec5d3fb63.png"
              />
            </div>
            <div class="flex-row ml-7">
              <img
                class="image_11"
                src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=1f761833efbc589e973bab360b502791.png"
              />
              <img
                class="image_12"
                src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=3c1549e5cc2ea60a437f77141e3a46ba.png"
              />
              <img
                class="image_13"
                src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=bbe03f4bd46b16c0427bace270f3c830.png"
              />
            </div>
            <img
              class="image_9 ml-7"
              src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=b0896158b78b5e337e3bf508ac568f9b.png"
            />
            <img
              class="image_10 ml-7"
              src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=e1fabd29f9e48211fbafbbe50500e2a4.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-col section_20 pos_17">
      <div class="flex-col group_15">
        <span class="self-start font_11 text_31">JOIN US AS</span>
        <div class="flex-row equal-division">
          <div class="flex-col items-start equal-division-item section_21">
            <span class="text_32">Traders</span>
            <div class="flex-col group_16 mt-147">
              <div class="self-start section_23"></div>
              <span class="self-stretch font_12 text_34 mt-41">
                Swap any token on Zircuit mainnet in your familiar way with best price, earn kibbles while you trade.
              </span>
            </div>
          </div>
          <div class="flex-col items-start equal-division-item section_22 ml-61">
            <span class="text_33">Liquidity provider</span>
            <div class="section_23 view"></div>
            <span class="font_12 text_35">
              Earn Eigen/LSTs points, Zircuit points and kibbles while having great LP rewards.
            </span>
          </div>
        </div>
      </div>
      <div class="flex-col group_17">
        <div class="flex-col justify-start items-start relative group_18">
          <span class="font_11 text_37">JOIN THE</span>
          <div class="flex-col items-start group_19 pos_19">
            <span class="font_13 text_36">JOIN THE</span>
            <span class="font_13">COMMUNITY</span>
          </div>
          <img
            class="image_14 pos_18"
            src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=361fbf4f50aaa8146e499dac63f8bf42.png"
          />
        </div>
        <div class="flex-col justify-start items-start relative group_20">
          <span class="font_11 text_38">COMMUNITY</span>
          <div class="flex-row justify-between items-center section_24 pos_21">
            <div class="flex-row items-center">
              <img
                class="image_16"
                src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=3167a7213e7518d426424265688266f3.png"
              />
              <div class="ml-16 flex-col">
                <div class="flex-row items-center">
                  <span class="font_14 text_39">Circuit</span>
                  <img
                    class="ml-2 shrink-0 image_17"
                    src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=b0264e1f5f3b88f0616292b1b4c48080.png"
                  />
                </div>
                <span class="mt-10 font_14 text_41">@Circuit</span>
              </div>
            </div>
            <div class="flex-col justify-start items-center text-wrapper_3"><span class="text_40">Follow</span></div>
          </div>
        </div>
      </div>
      <div class="flex-row justify-center group_21">
        <span class="font_14 text_42 text_43">© 2024 circuit</span>
        <span class="ml-12 font_14 text_42 text_44">Terms & conditions</span>
      </div>
      <img
        class="image_15 pos_20"
        src="https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=56888e279641b047b77bfd6774a9f2e1.png"
      />
    </div>
  </div>
</template>

<style scoped lang="css">
  .mt-17 {
    margin-top: 17px;
  }
  .mt-97 {
    margin-top: 97px;
  }
  .mt-149 {
    margin-top: 149px;
  }
  .ml-19 {
    margin-left: 19px;
  }
  .mt-141 {
    margin-top: 141px;
  }
  .mt-21 {
    margin-top: 21px;
  }
  .ml-17 {
    margin-left: 17px;
  }
  .mt-180 {
    margin-top: 180px;
  }
  .mt-27 {
    margin-top: 27px;
  }
  .mt-29 {
    margin-top: 29px;
  }
  .ml-5 {
    margin-left: 5px;
  }
  .ml-7 {
    margin-left: 7px;
  }
  .mt-147 {
    margin-top: 147px;
  }
  .mt-41 {
    margin-top: 41px;
  }
  .ml-61 {
    margin-left: 61px;
  }
  .page {
    padding-bottom: 3896px;
    background-color: #ffffff;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .section {
    padding-left: 25px;
    padding-top: 22px;
    background-image: url('https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=10c87bb48eca157c22975392a5f91ca4.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .image_3 {
    width: 164px;
    height: 41px;
  }
  .group {
    margin-right: 27px;
  }
  .image {
    filter: drop-shadow(0px 0px 10px #0000001a);
    border-radius: 20px;
    width: 66px;
    height: 66px;
  }
  .section_2 {
    padding: 10px 10px 10px 40px;
    background-color: #28933a;
    border-radius: 20px;
    box-shadow: 0px -4px 4px #00000040 inset;
    height: 66px;
  }
  .font {
    font-size: 19px;
    font-family: Monument Extended;
    line-height: 12.5px;
    color: #ffffff;
  }
  .text {
    font-size: 18px;
  }
  .image_2 {
    border-radius: 15px;
    width: 46px;
    height: 46px;
  }
  .group_2 {
    margin-left: 23px;
    padding: 140px 0 255px;
    height: 707px;
  }
  .pos_2 {
    position: absolute;
    left: 2.5px;
    top: 140px;
  }
  .font_2 {
    font-size: 79px;
    font-family: Monument Extended;
    line-height: 95px;
    color: #000000;
  }
  .text_2 {
    color: #28933a;
  }
  .group_3 {
    line-height: 21.5px;
  }
  .pos_3 {
    position: absolute;
    left: 0;
    top: 331px;
  }
  .font_3 {
    font-size: 22px;
    font-family: Inter;
    line-height: 21.5px;
    font-weight: 700;
    color: #000000;
  }
  .text_3 {
    line-height: 16px;
  }
  .font_4 {
    font-size: 22px;
    font-family: Inter;
    line-height: 21.5px;
    color: #000000;
  }
  .text_7 {
    line-height: 6px;
  }
  .text_4 {
    line-height: 16.5px;
  }
  .text_5 {
    line-height: 21px;
  }
  .text_6 {
    line-height: 17px;
  }
  .text-wrapper {
    padding: 28px 0;
    background-color: #28933a;
    border-radius: 20px;
    box-shadow: 0px -4px 4px #0000001a inset, 0px 10px 20px #0000001f;
    width: 190px;
  }
  .pos_4 {
    position: absolute;
    left: 0;
    top: 386px;
  }
  .font_5 {
    font-size: 16px;
    font-family: Monument Extended;
  }
  .text_8 {
    color: #ffffff;
    line-height: 11px;
  }
  .text-wrapper_2 {
    padding: 28px 0;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0px -4px 4px #0000001a inset, 0px 4px 20px #0000001f;
    width: 190px;
  }
  .pos_5 {
    position: absolute;
    left: 208px;
    top: 386px;
  }
  .text_9 {
    color: #000000;
    line-height: 11.5px;
  }
  .section_3 {
    padding: 623px 0 18px;
    background-image: url('https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=6844a2885195d52ec2b435e2beef95b2.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 751px;
  }
  .pos {
    position: absolute;
    right: 0;
    top: 0;
  }
  .section_6 {
    margin-right: 27px;
    padding: 10px 10px 10px 40px;
    background-color: #28933a;
    border-radius: 20px;
    box-shadow: 0px -4px 4px #00000040 inset;
  }
  .text_13 {
    font-size: 18px;
  }
  .section_8 {
    padding: 140px 27px 284px 35px;
    background-color: #fbfbfb;
    border-radius: 20px 100px 0px 0px;
  }
  .font_8 {
    font-size: 60px;
    font-family: Monument Extended;
    color: #000000;
  }
  .text_14 {
    margin-left: 486px;
    line-height: 46px;
  }
  .group_5 {
    padding: 0 5px;
  }
  .image_5 {
    border-radius: 11px;
    width: 38px;
    height: 38px;
  }
  .text_15 {
    line-height: 21.5px;
  }
  .section_9 {
    padding-bottom: 20px;
    flex: 1 1 448px;
    background-color: #f2f2f2;
    border-radius: 10px 50px 10px 10px;
    height: 583px;
  }
  .image_6 {
    border-radius: 10px 50px 10px 10px;
    width: 448px;
    height: 327px;
  }
  .group_10 {
    padding: 0 20px;
  }
  .font_6 {
    font-size: 16px;
    font-family: Inter;
    line-height: 15.5px;
    color: #000000;
  }
  .text_18 {
    line-height: 15.5px;
  }
  .text_19 {
    line-height: 15.5px;
  }
  .group_6 {
    margin-top: 27px;
    flex: 1 1 448px;
  }
  .group_7 {
    padding: 0 10px 17px;
  }
  .text_16 {
    line-height: 21.5px;
  }
  .section_10 {
    padding-bottom: 28px;
    background-color: #f2f2f2;
    border-radius: 10px 50px 10px 10px;
  }
  .text_20 {
    line-height: 15.5px;
  }
  .group_8 {
    margin-top: 109px;
    flex: 1 1 448px;
  }
  .group_9 {
    padding-bottom: 16px;
  }
  .text_17 {
    line-height: 21px;
  }
  .section_11 {
    padding-bottom: 26px;
    background-color: #f2f2f2;
    border-radius: 10px 50px 10px 10px;
  }
  .group_11 {
    padding: 0 16px;
  }
  .text_21 {
    line-height: 12.5px;
  }
  .section_12 {
    padding: 148px 142px 228px;
    background-color: #28933a;
    border-radius: 20px 100px 0px 0px;
  }
  .pos_9 {
    position: absolute;
    left: 0;
    right: 0;
    top: 2140px;
  }
  .text_22 {
    line-height: 43px;
  }
  .section_13 {
    padding-top: 85px;
    background-image: url('https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=16b2e9c0381b291061c22d45767448c0.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 805px;
  }
  .group_12 {
    border-image-slice: 1;
    border-radius: 50%;
    width: 648px;
    height: 648px;
    border-left: solid 50px #fbfbfb33;
    border-right: solid 50px #fbfbfb33;
    border-top: solid 50px #fbfbfb33;
    border-bottom: solid 50px #fbfbfb33;
  }
  .font_9 {
    font-size: 44px;
    font-family: Monument Extended;
    line-height: 39.5px;
    color: #ffffff;
  }
  .pos_14 {
    position: absolute;
    left: 160px;
    bottom: 168.5px;
  }
  .font_10 {
    font-size: 19px;
    font-family: Mark Pro;
    line-height: 14px;
    color: #ffffff;
  }
  .text_28 {
    line-height: 13.5px;
  }
  .pos_15 {
    position: absolute;
    left: 221.5px;
    bottom: 128px;
  }
  .section_18 {
    padding: 94px 0 50px;
    background-color: #09230d;
    border-radius: 44px;
    width: 336px;
  }
  .pos_13 {
    position: absolute;
    right: 37px;
    top: 448px;
  }
  .text_27 {
    margin-left: 98px;
    line-height: 30.5px;
  }
  .text_29 {
    margin-left: 92px;
    line-height: 13.5px;
  }
  .group_13 {
    filter: drop-shadow(0px 30px 20px #00000026);
    width: 891px;
  }
  .pos_11 {
    position: absolute;
    right: 91.5px;
    top: 298px;
  }
  .section_15 {
    margin-left: 34px;
    padding: 10px 0 46px;
    background-color: #ffffff33;
    border-radius: 44px;
    backdrop-filter: blur(16.5px);
    width: 857.5px;
  }
  .text_24 {
    margin-left: 366px;
  }
  .text_25 {
    margin-left: 238px;
  }
  .text_26 {
    margin-left: 312px;
    line-height: 17.5px;
  }
  .section_16 {
    filter: drop-shadow(0px 23px 31px #00000033);
    background-image: linear-gradient(92deg, #ffffff14 -4.8%, #ffffff24 107.4%);
    border-radius: 44px;
    backdrop-filter: blur(16.5px);
    width: 386.5px;
  }
  .pos_12 {
    position: absolute;
    left: 92.5px;
    top: 436px;
  }
  .section_17 {
    background-image: linear-gradient(92deg, #ffffff14 -4.8%, #ffffff24 107.4%);
    border-radius: 44px;
    backdrop-filter: blur(16.5px);
    height: 218px;
  }
  .section_14 {
    padding: 92px 52px 50px;
    background-image: linear-gradient(91.7deg, #ffffff14 -4.8%, #ffffff24 107.4%);
    border-radius: 20px 44px 20px 20px;
    backdrop-filter: blur(16.5px);
    width: 336px;
  }
  .pos_10 {
    position: absolute;
    right: 318px;
    top: 150px;
  }
  .text_23 {
    line-height: 31.5px;
  }
  .section_4 {
    background-color: #28933a80;
    filter: blur(250px);
    border-radius: 50%;
    height: 321px;
  }
  .pos_6 {
    position: absolute;
    left: -42px;
    right: 822px;
    top: 651px;
  }
  .section_5 {
    padding: 0 40px;
    border-radius: 20px;
    filter: drop-shadow(0px 0px 10px #0000001a);
    backdrop-filter: blur(6px);
    background-image: url('https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=bc237309140b1aab61ceb39d1df8296b.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 532px;
  }
  .pos_7 {
    position: absolute;
    right: 446px;
    top: 728px;
  }
  .group_4 {
    padding: 26px 0;
  }
  .text_10 {
    line-height: 12px;
  }
  .font_7 {
    font-size: 16px;
    font-family: Inter;
    line-height: 12px;
    color: #000000;
  }
  .text_11 {
    line-height: 12px;
  }
  .text_12 {
    line-height: 12px;
  }
  .section_7 {
    background-color: #28933a;
    width: 45px;
    height: 2px;
  }
  .image_4 {
    width: 58px;
    height: 12px;
  }
  .pos_8 {
    position: absolute;
    left: 494.5px;
    top: 789px;
  }
  .group_14 {
    overflow: hidden;
    height: 996px;
  }
  .pos_16 {
    position: absolute;
    left: 0;
    right: 0;
    top: 3308px;
  }
  .section_19 {
    padding: 738px 34px 212px;
    background-image: url('https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=5827ad3fc02a7f44901f39654b4e9009.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .text_30 {
    margin-right: 6px;
    color: #000000;
    font-size: 22px;
    font-family: Mark Pro;
    line-height: 16px;
  }
  .image_7 {
    width: 125px;
    height: 126px;
  }
  .image_8 {
    width: 62px;
    height: 82px;
  }
  .image_9 {
    width: 13px;
    height: 82px;
  }
  .image_11 {
    width: 34px;
    height: 59px;
  }
  .image_12 {
    width: 57px;
    height: 61px;
  }
  .image_13 {
    margin-left: 6px;
    width: 53px;
    height: 60px;
  }
  .image_10 {
    width: 35px;
    height: 75px;
  }
  .section_20 {
    padding: 112px 149px 114px 184px;
    background-color: #000000;
    border-radius: 20px 20px 0px 0px;
  }
  .pos_17 {
    position: absolute;
    left: 0;
    right: 0;
    top: 4219px;
  }
  .group_15 {
    height: 690px;
  }
  .font_11 {
    font-size: 90px;
    font-family: Monument Extended;
    line-height: 108px;
    color: #ffffff;
  }
  .text_31 {
    margin-left: 188px;
    line-height: 65px;
  }
  .equal-division {
    position: relative;
    align-self: stretch;
    margin-top: -28px;
  }
  .equal-division-item {
    flex: 1 1 523px;
  }
  .section_21 {
    padding: 96px 36px 58px;
    border-radius: 20px;
    filter: drop-shadow(0px 0px 10px #0000001a);
    backdrop-filter: blur(6px);
    background-image: url('https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=919aed63a3bd31857111f5b80fcc1a67.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 654px;
  }
  .text_32 {
    margin-left: 136px;
    color: #ffffff;
    font-size: 32px;
    font-family: Monument Extended;
    line-height: 26px;
  }
  .group_16 {
    width: 321.5px;
  }
  .section_23 {
    background-color: #3d3d3d;
    border-radius: 21px;
    width: 241px;
    height: 230px;
  }
  .font_12 {
    font-size: 16px;
    font-family: Inter;
    line-height: 19px;
    color: #ffffff;
  }
  .text_34 {
    text-align: justify;
  }
  .section_22 {
    padding: 96px 36px 78px;
    border-radius: 20px;
    filter: drop-shadow(0px 0px 10px #0000001a);
    backdrop-filter: blur(6px);
    background-image: url('https://ide.code.fun/api/image?token=66b5c0b95fdd2800116b9762&name=919aed63a3bd31857111f5b80fcc1a67.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 654px;
  }
  .text_33 {
    margin-left: 28px;
    color: #ffffff;
    font-size: 33px;
    font-family: Monument Extended;
    line-height: 34.5px;
  }
  .view {
    margin-top: 138px;
  }
  .text_35 {
    margin-top: 40px;
    text-align: justify;
    width: 320px;
  }
  .group_17 {
    margin-top: 314px;
    padding: 0 80px;
  }
  .group_18 {
    margin-right: 34px;
    padding-top: 274px;
    height: 383px;
  }
  .text_37 {
    margin-left: 158px;
  }
  .group_19 {
    text-align: center;
    filter: blur(12.5px);
  }
  .pos_19 {
    position: absolute;
    left: 0;
    right: 0;
    top: 92px;
  }
  .font_13 {
    font-size: 111px;
    font-family: Monument Extended;
    line-height: 133px;
    color: #ffffff;
  }
  .text_36 {
    margin-left: 88px;
  }
  .image_14 {
    width: 329px;
    height: 297px;
  }
  .pos_18 {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .group_20 {
    padding-bottom: 46px;
  }
  .text_38 {
    margin-left: 86px;
  }
  .section_24 {
    padding: 14px;
    background-color: #0d0b0d;
    border-radius: 19px;
    width: 287px;
  }
  .pos_21 {
    position: absolute;
    left: 312.5px;
    top: 69px;
  }
  .image_16 {
    border-radius: 37px;
    width: 56px;
    height: 56px;
  }
  .font_14 {
    font-size: 16px;
    font-family: Mark Pro;
    color: #ffffff;
  }
  .text_39 {
    line-height: 11.5px;
  }
  .image_17 {
    width: 14px;
    height: 14px;
  }
  .text_41 {
    line-height: 14px;
    opacity: 0.4;
  }
  .text-wrapper_3 {
    padding: 14px 0;
    background-color: #ffffff;
    border-radius: 23px;
    width: 78.5px;
    height: 38px;
  }
  .text_40 {
    color: #000000;
    font-size: 14px;
    font-family: Mark Pro;
    line-height: 10px;
  }
  .group_21 {
    margin-top: 76px;
  }
  .text_42 {
    opacity: 0.1;
  }
  .text_43 {
    line-height: 13px;
  }
  .text_44 {
    line-height: 11.5px;
  }
  .image_15 {
    width: 466px;
    height: 424px;
  }
  .pos_20 {
    position: absolute;
    left: -74px;
    bottom: 0;
  }
</style>