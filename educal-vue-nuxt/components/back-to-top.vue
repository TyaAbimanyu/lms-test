<template>
 <div @click="backToTop" class="progress-wrap">
      <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
  </div>
</template>

<script setup lang="ts">
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
onMounted(() => {
  const progressParent = document.querySelector('.progress-wrap') as HTMLElement | null;
  const progressPath = document.querySelector('.progress-wrap path') as SVGPathElement | null;

  if (!progressParent || !progressPath) {
    console.error("Could not find progress parent or path elements");
    return;
  }

  const pathLength = progressPath.getTotalLength();

  progressPath.style.transition = progressPath.style.webkitTransition = 'none';
  progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
  progressPath.style.strokeDashoffset = pathLength.toString(); // Convert to string
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.webkitTransition = 'stroke-dashoffset 10ms linear';

  const updateProgress = () => {
    const scroll = window.scrollY;
    const docHeight = document.body.offsetHeight;
    const winHeight = window.innerHeight;
    const height = docHeight - winHeight;
    const progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress.toString();
  };

  updateProgress();
  window.addEventListener('scroll', updateProgress);

  let offset = 50;

  window.addEventListener('scroll', () => {
    if (window.scrollY > offset) {
      progressParent.classList.add('active-progress');
    } else {
      progressParent.classList.remove('active-progress');
    }
  });
});
</script>