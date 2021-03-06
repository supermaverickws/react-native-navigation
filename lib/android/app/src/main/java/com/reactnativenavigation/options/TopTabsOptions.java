package com.reactnativenavigation.options;

import android.content.Context;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.reactnativenavigation.options.params.Bool;
import com.reactnativenavigation.options.params.Colour;
import com.reactnativenavigation.options.params.NullBool;
import com.reactnativenavigation.options.params.NullColor;
import com.reactnativenavigation.options.params.NullNumber;
import com.reactnativenavigation.options.params.Number;
import com.reactnativenavigation.options.parsers.BoolParser;
import com.reactnativenavigation.options.parsers.ColorParser;
import com.reactnativenavigation.options.parsers.NumberParser;
import com.reactnativenavigation.options.parsers.TextParser;
import com.reactnativenavigation.options.params.Text;
import com.reactnativenavigation.options.params.NullText;
import com.google.android.material.tabs.TabLayout;

import org.json.JSONObject;

public class TopTabsOptions {

    @NonNull public Colour selectedTabColor = new NullColor();
    @NonNull public Colour unselectedTabColor = new NullColor();
    @NonNull public Number fontSize = new NullNumber();
    @NonNull public Bool visible = new NullBool();
    @NonNull public Number height = new NullNumber();
    @NonNull public Text tabMode = new NullText();

    public static TopTabsOptions parse(Context context, @Nullable JSONObject json) {
        TopTabsOptions result = new TopTabsOptions();
        if (json == null) return result;
        result.selectedTabColor = ColorParser.parse(context, json, "selectedTabColor");
        result.unselectedTabColor = ColorParser.parse(context, json, "unselectedTabColor");
        result.fontSize = NumberParser.parse(json, "fontSize");
        result.visible = BoolParser.parse(json, "visible");
        result.height = NumberParser.parse(json, "height");
        result.tabMode = TextParser.parse(json, "tabMode");
        return result;
    }

    void mergeWith(TopTabsOptions other) {
        if (other.selectedTabColor.hasValue()) selectedTabColor = other.selectedTabColor;
        if (other.unselectedTabColor.hasValue()) unselectedTabColor = other.unselectedTabColor;
        if (other.fontSize.hasValue()) fontSize = other.fontSize;
        if (other.visible.hasValue()) visible = other.visible;
        if (other.height.hasValue()) height = other.height;
        if (other.tabMode.hasValue()) tabMode = other.tabMode;
    }

    void mergeWithDefault(TopTabsOptions defaultOptions) {
        if (!selectedTabColor.hasValue()) selectedTabColor = defaultOptions.selectedTabColor;
        if (!unselectedTabColor.hasValue()) unselectedTabColor = defaultOptions.unselectedTabColor;
        if (!fontSize.hasValue()) fontSize = defaultOptions.fontSize;
        if (!visible.hasValue()) visible = defaultOptions.visible;
        if (!height.hasValue()) height = defaultOptions.height;
        if (!tabMode.hasValue()) tabMode = defaultOptions.tabMode;
    }

    public int getTabMode() {
        if(tabMode.hasValue()){
            switch (tabMode.get()){
                case "auto":
                    return TabLayout.MODE_AUTO;
                case "scrollable":
                    return TabLayout.MODE_SCROLLABLE;
                default:
                    return TabLayout.MODE_FIXED;
            }
        }
        return TabLayout.MODE_FIXED;
    }
    
}
