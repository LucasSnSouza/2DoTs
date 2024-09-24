<template>

    <div 
        class="input-select-wrapper "
        :class="this.class, type"
    >
        <p class="input-select-title" v-if="title">{{ title }}</p>
        <div 
            class="select-data flex justify-between y-center"
            :class="{'isopen': status_opened_form}"
            @click="status_opened_form = !status_opened_form"
        >
            <div>
                <p 
                    v-if="placeholder && selected_index === null"
                    class="color-brand-four"
                >
                    {{ form.length <= 0 ? 'Sem valores' : placeholder }}
                </p>
                <p
                    v-else
                    class="color-brand-two"
                >
                    {{ form[selected_index]?.label }}
                </p>
            </div>
            <MiscIcon
                v-if="form.length > 0"
                class="select-icon-dropdown"
                icon="down-arrow-icon"
                color="rgb(190, 190, 190)"
                :size="[9, 9]"
                :class="{'close': status_opened_form}"
            />
        </div>
        <div 
            v-if="status_opened_form && form.length > 0" 
            class="select-form"
        >
            <div 
                v-for="(item, index) of form"
                class="select-form-data flex flex-column gap-md"
                :index="index"
                @click="(selected_index = index), (status_opened_form = false), ($emit('update:modelValue', form[selected_index]?.value))"
            >
                <p>{{ item?.label }}</p>
            </div>
        </div>
    </div>
        
</template>

<script>

import * as Misc from '@/components/Misc';

export default{
    data(){
        return {
            formatted_values: [],
            status_opened_form: false,
            selected_index: null,
        }
    },
    components: {
        ...Misc
    },
    props: {
        type: {
            type: String,
            default: "one"
        },
        class: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        form: {
            type: Array,
            default: () => []
        }
    },
    created(){
    }
}

</script>

<style lang="scss" scoped>

.input-select-wrapper{
    position: relative;

    .input-select-title{
        margin-bottom: var(--scale-brand-sm);
    }

    &.one{
        div.select-data{
            background: white;
            border: 1px solid var(--color-brand-two);
            border-radius: var(--scale-brand-md);
            outline: none;
            padding: var(--scale-brand-lg);
            z-index: 2;
        }
        div.select-form{
            position: absolute;
            background: white;
            width: 100%;
            z-index: 1;
            margin-top: 5px;
            border: 1px solid var(--color-brand-two);
            border-radius: var(--scale-brand-md);
            padding: var(--scale-brand-md);
            box-shadow: var(--scale-brand-sm) var(--scale-brand-sm) var(--scale-brand-md) rgba(0, 0, 0, 0.10);
            max-height: 300px;
            overflow-y: scroll;

            p{
                padding: var(--scale-brand-md);
            }
        }
    }

}

.select-icon-dropdown{
    transition: .3s;
    &.close{
        transform: rotate(180deg);
    }
}

</style>