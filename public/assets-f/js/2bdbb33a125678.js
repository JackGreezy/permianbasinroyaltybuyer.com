/**
 * Initialize Coveo Atomic Search Interface
 * NOTE: This is not a versioned clientlib, so if you make changes, clear the cache after deploying to each environment.
 */
import {
    defineCustomElements
} from "https://static.cloud.coveo.com/atomic/v3.51.0/index.js";
import {
    loadSortCriteriaActions,
    buildRelevanceSortCriterion,
    buildFieldSortCriterion
} from "https://static.cloud.coveo.com/headless/v3.45.1/headless.esm.js";

function waitForAtomic() {
    defineCustomElements();
    return customElements.whenDefined("atomic-search-interface")
}
async function intializeAtomicSearch() {
    await waitForAtomic();
    const startTime = new Date();
    const searchInterface = document.querySelector("atomic-search-interface");
    const orgId = document.querySelector('meta[name="coveo_org_id"]')?.content;
    const accessToken = document.querySelector('meta[name="coveo_api_token"]')?.content;
    const env = "prod";
    await searchInterface.initialize({
        accessToken: accessToken, organizationId: orgId, environment: env, analytics: {
            analyticsMode: "legacy"
        }
    });
    const initializationEndTime = new Date();
    const intilizationTimeElapsed = initializationEndTime - startTime;
    console.log('Search interface initialized in ' + intilizationTimeElapsed + ' ms');

    document.querySelector(".search-loading")?.remove();
    document.querySelector(".search-box-title")?.removeAttribute('hidden'); //title is hidden until the rest of the component loads
    document.querySelector("view-toggle")?.removeAttribute('hidden'); //view toggle is hidden until the rest of the component loads

    const searchComponent = document.querySelector('.cmp-search-results-atomic');
    const searchBoxPlaceholder = searchComponent.dataset.searchBoxPlaceholder || 'Search';
    const noResultsHeader = (searchComponent.dataset.noResultsHeader || 'We couldn\'t find anything for').trim() +  ' {{query}}';
    const noResultsMessage = searchComponent.dataset.noResultsMessage || 'Please try your search again.';
    const noResultsButtonText = searchComponent.dataset.noResultsButtonText || 'Reset search';

    // Customize default strings
    searchInterface.i18n.addResourceBundle('en', 'translation', {
        'search': searchBoxPlaceholder,
        'no-results-for': noResultsHeader,
        'search-tips': noResultsMessage,
        'cancel-last-action': noResultsButtonText
    });

    searchInterface.executeFirstSearch()

    // When the keyword is updated, update sorting
    handleKeywordSearchSorting(searchInterface);

}
intializeAtomicSearch();

/**
 * Automatically manages search results sorting based on user intent.
 * * 1. When a keyword is entered: Switches sort to 'Relevancy' to ensure
 * the most accurate matches appear first.
 * 2. When the search is cleared: Reverts to the default field-based sort
 * defined in the template (e.g., 'sortordernumeric' or 'projectcompletiondate').
 * * Uses a state subscription with a 'previousQuery' guard to prevent
 * redundant dispatches and infinite loops.
 */
function handleKeywordSearchSorting(searchInterface) {
    const engine = searchInterface.engine;
    let previousQuery = engine.state.query.q;

    engine.subscribe(() => {
        const currentState = engine.state;
        const currentQuery = currentState.query.q;
        const currentSort = currentState.sortCriteria;

        // Check if the keyword actually changed
        if (currentQuery !== previousQuery) {
            const sortActions = loadSortCriteriaActions(engine);

            previousQuery = currentQuery;
            if (currentQuery !== "" && currentSort !== "relevancy") {
                engine.dispatch(sortActions.updateSortCriterion(buildRelevanceSortCriterion()));
            }
            else if (currentQuery === "" && currentSort === "relevancy") {
                engine.dispatch(sortActions.updateSortCriterion(getDefaultSortFromUI()));
            }
        }
    });
}

const getDefaultSortFromUI = () => {
    const firstExpression = document.querySelector('atomic-sort-dropdown atomic-sort-expression');

    if (firstExpression && firstExpression.getAttribute('expression')) {
        const sortExpressionParts = firstExpression.getAttribute('expression').split(" ");
        if (sortExpressionParts.length > 1) {
            return buildFieldSortCriterion(sortExpressionParts[0], sortExpressionParts[1]);
        } else {
            return buildRelevanceSortCriterion();
        }
    }
    // Fallback if the element isn't found
    return buildRelevanceSortCriterion();
};