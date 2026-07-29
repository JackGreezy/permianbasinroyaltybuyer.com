import { x } from './custom-element-ClSinbnR.js';
import { r as renderRadioButton } from './radio-button-B_orPDne.js';
const renderChoices = ({ props }) => {
    const { label, groupName, pageSize, choices, lang, scrollToTopEvent, setItemSize, focusOnFirstResultAfterNextSearch, focusOnNextNewResult, } = props;
    const focusOnProperResultDependingOnChoice = (choice) => {
        if (choice < pageSize) {
            focusOnFirstResultAfterNextSearch()?.then(() => scrollToTopEvent());
        }
        else if (choice > pageSize) {
            focusOnNextNewResult();
        }
    };
    return x `
    <div
      part="buttons"
      role="radiogroup"
      aria-label=${label}
      class="flex flex-wrap gap-2"
    >
      ${choices.map((choice) => {
        const isSelected = pageSize === choice;
        const parts = ['button'];
        if (isSelected) {
            parts.push('active-button');
        }
        const text = choice.toLocaleString(lang);
        return renderRadioButton({
            props: {
                key: 'choice',
                groupName,
                style: 'outline-neutral',
                checked: isSelected,
                ariaLabel: text,
                onChecked: () => {
                    focusOnProperResultDependingOnChoice(choice);
                    setItemSize(choice);
                },
                class: 'btn-page focus-visible:bg-neutral-light',
                part: parts.join(' '),
                text,
                selectWhenFocused: false,
            },
        });
    })}
    </div>
  `;
};
const renderLabel = () => (children) => x `
    <span
      part="label"
      class="text-on-background mr-3 self-start text-lg leading-10"
      aria-hidden="true"
    >
      ${children}
    </span>
  `;
class ChoiceIsNaNError extends Error {
    constructor(choice) {
        super(`The choice value "${choice}" from the "choicesDisplayed" option is not a number.`);
        this.name = 'ChoiceIsNaNError';
    }
}
class InitialChoiceNotInChoicesError extends Error {
    constructor(initialChoice, choices) {
        super(`The initial choice value "${initialChoice}" is not included in the choices ${choices}.`);
        this.name = 'InitialChoiceNotInChoicesError';
    }
}
class ChoiceIsNonPositiveError extends Error {
    constructor(choice) {
        super(`The choice value "${choice}" from the "choicesDisplayed" option is not positive (<= 0).`);
        this.name = 'ChoiceIsNonPositiveError';
    }
}
function convertChoicesToNumbers(choices) {
    return choices.split(',').map((choice) => {
        const parsedChoice = parseInt(choice);
        if (Number.isNaN(parsedChoice)) {
            throw new ChoiceIsNaNError(choice);
        }
        if (parsedChoice <= 0) {
            throw new ChoiceIsNonPositiveError(parsedChoice);
        }
        return parsedChoice;
    });
}
function validateInitialChoice(initialChoice, choices) {
    if (!choices.includes(initialChoice)) {
        throw new InitialChoiceNotInChoicesError(initialChoice, choices);
    }
    return initialChoice;
}
export { ChoiceIsNaNError as C, InitialChoiceNotInChoicesError as I, renderChoices as a, convertChoicesToNumbers as c, renderLabel as r, validateInitialChoice as v };
//# sourceMappingURL=validate-065bLaXE.js.map
