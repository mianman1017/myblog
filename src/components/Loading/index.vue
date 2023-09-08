<template>
    <div class="loading-wrapper">
        <div class="loading">
            <span class="top"></span>
            <span class="bottom"></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style>
.loading-wrapper {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
    z-index: 100;
    filter: brightness(var(--bg_brightness));
}

.loading {
    width: 86px;
    height: 196px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    animation: sand-rotating 1.5s linear infinite;
}

.top,
.bottom {
    width: 70px;
    height: 70px;
    border-style: solid;
    border-color: #dcdcdc;
    border-width: 4px 4px 12px 12px;
    border-radius: 50% 100% 50% 30%;
    position: relative;
    overflow: hidden;
}

.top {
    transform: rotate(-45deg);
}

.bottom {
    transform: rotate(135deg);
}

.top::before,
.bottom::before {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: #b2a0d7;
    animation: 1.5s linear infinite;
}

.top::before {
    border-radius: 0 100% 0 0;
    animation-name: drop-sand;
}

.bottom::before {
    border-radius: 0 0 0 25%;
    transform: translate(50px, -50px);
    animation-name: fill-sand;
}

.loading::after {
    content: '';
    width: 5px;
    height: 96px;
    background-color: #b2a0d7;
    position: absolute;
    top: 20px;
    animation: flow 1.5s linear infinite;
}

@keyframes drop-sand {
    to {
        transform: translate(-50px, 50px);
    }
}

@keyframes fill-sand {
    to {
        transform: translate(0, 0);
    }
}

@keyframes flow {
    10%,
    100% {
        transform: translateY(64px);
    }
}

@keyframes sand-rotating {
    0%,
    90% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(180deg);
    }
}
</style>
