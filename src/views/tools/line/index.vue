<script setup>
    import LeaderLine from 'leader-line-vue';
    import {onMounted, onActivated, watch} from 'vue';
    import {onBeforeRouteLeave} from 'vue-router';
    import {useStore} from 'vuex';

    const store = useStore();

    let _line;

    watch(() => store.state.app.collapse, () => {
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
            _line.position();
        }, 100);
    });

    onActivated(() => {
        if (_line) {
            setTimeout(() => {
                _line.position();
            }, 300);
        } else {
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
                _line.position();
            }, 100);
        }
    });
    onBeforeRouteLeave(() => {
        if (_line) {
            _line.hide();
            _line = null;
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
