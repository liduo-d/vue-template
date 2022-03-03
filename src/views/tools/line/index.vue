<script setup>
    import LeaderLine from 'leader-line-vue';
    import {onMounted, onActivated, watch, onBeforeUnmount} from 'vue';
    import {onBeforeRouteLeave, useRoute} from 'vue-router';
    import {useStore} from 'vuex';

    const store = useStore();
    const route = useRoute();

    let _line;

    watch(() => store.state.app.collapse, () => {
        if (route.path !== '/line') return;
        if (_line) {
            _line.hide();
            setTimeout(() => {
                _line.position();
                _line.show();
            }, 300)
        }
    })
    onMounted(() => {
        setTimeout(() => {
            _line = LeaderLine.setLine(
                LeaderLine.obj.pointAnchor(document.getElementById('angel'), {x: '100%', y: 0}),
                LeaderLine.obj.pointAnchor(document.getElementById('heart'), {x: 0, y: 0}),
                {
                    dash: true,
                    color: 'red',
                    duration: 300,
                    timing: 'linear'
                }
            );
            _line.setOptions({
                startSocketGravity: [192, -172],
                endSocketGravity: [-192, -172]
            });
        }, 100);
    });

    onActivated(() => {
        setTimeout(() => {
            if (_line) {
                _line.position();
                _line.show();
            } else {
                _line = LeaderLine.setLine(
                    LeaderLine.obj.pointAnchor(document.getElementById('angel'), {x: '100%', y: 0}),
                    LeaderLine.obj.pointAnchor(document.getElementById('heart'), {x: 0, y: 0}),
                    {
                        dash: true,
                        color: 'red',
                        duration: 300,
                        timing: 'linear'
                    }
                );
                _line.setOptions({
                    startSocketGravity: [192, -172],
                    endSocketGravity: [-192, -172]
                });
            }
        }, 100);
    });

    onBeforeUnmount(() => {
        if (_line) {
            _line.remove();
            _line = null;
        }
    })

    onBeforeRouteLeave(() => {
        if (_line) {
            _line.hide();
        }
    })
</script>

<script>
    export default {
        name: 'Line'
    }
</script>
<template>
    <div>
        <img id="angel" src="@/assets/angel.png" alt="angel.png"
             style="position: absolute; left: 0; top: 161px">
        <img id="heart" src="@/assets/heart.png" alt="heart.png"
             style="position: absolute; left: 722px; top: 156px">
    </div>
</template>

<style scoped>

</style>
