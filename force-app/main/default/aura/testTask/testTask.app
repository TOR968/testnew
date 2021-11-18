<aura:application implements="flexipage:availableForAllPageTypes" access="global" extends="force:slds">
    <lightning:layout class="slds-page-header" />

    <h1 class="slds-text-heading_medium">Aura</h1>
    
    <div class="demo-only demo-only--sizing slds-grid slds-wrap">
        <div class="slds-size_1-of-3">
            <div class="slds-box slds-box_x-small slds-var-m-around_x-small"><c:IndustryComp /></div>
        </div>
        <div class="slds-size_2-of-3">
            <div class="slds-box slds-box_x-small slds-var-m-around_x-small"><c:countComp /></div>
        </div>
        <div class="slds-size_2-of-2">
            <div class="slds-box slds-box_x-small slds-var-m-around_x-small"><c:tableComp /></div>
        </div>
    </div>

</aura:application>	
