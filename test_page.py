from playwright.sync_api import sync_playwright

def run():
    p = sync_playwright().start()
    browser = p.chromium.launch()
    page = browser.new_page()
    page.on('console', lambda msg: print(f'CONSOLE: {msg.text}'))
    page.on('pageerror', lambda err: print(f'ERROR: {err}'))
    page.on('response', lambda res: print(f'404: {res.url}') if res.status == 404 else None)
    
    try:
        page.goto('http://localhost:8084')
        page.wait_for_timeout(3000)
    except Exception as e:
        print(f"Failed to navigate: {e}")
    finally:
        browser.close()
        p.stop()

if __name__ == "__main__":
    run()
