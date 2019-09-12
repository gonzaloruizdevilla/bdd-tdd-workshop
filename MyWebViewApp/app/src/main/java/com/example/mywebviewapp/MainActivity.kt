package com.example.mywebviewapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebView



class MainActivity : AppCompatActivity() {

    private var webView: WebView? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        WebView.setWebContentsDebuggingEnabled(true);
        webView = findViewById(R.id.webview) as WebView
        webView!!.settings.javaScriptEnabled = true
        webView!!.loadUrl("file:///android_asset/sample.html");

    }
}
